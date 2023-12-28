const jwt = require("jsonwebtoken");
const User = require("../schemas/sql_users");
const bcrypt = require('bcrypt');
const { token } = require("morgan");
require("../config/google.config");
require("dotenv").config();

const signUpUser = async (req, res) => {
    try {
      const existingUser = await User.findOne({ where: { email: req.body.email } });
      if (existingUser) {
        return res.status(409).json({ success: false, message: `Email already registered.` });
      }
  
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({
        email: req.body.email,
        password: hashedPassword,
        username: req.body.username,
      });
  
      res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
      res.status(400).json({ message: `ERROR: ${error.message}` });
    }
  };

  const signInUser = async (req, res) => {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        return res.status(400).json({ success: false, message: `User does not exist.` });
      }
  
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (isMatch) {
        const tokenData = {
          id: user.id_user,
          email: user.email,
          username: user.username,
          admin: user.admin
        };
  
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
          expiresIn: 3600000, 
        });


        res.cookie('access-token', token, {
          httpOnly: true,
          secure: false, 
          sameSite: 'strict', 
          expires: new Date(Date.now() + 3600000) 
        });

     
        res.status(200).json({ success: true, message: 'Authentication successful' });
      } else {
        res.status(401).json({ success: false, message: `Invalid password.` });
      }
    } catch (error) {
      res.status(400).json({ message: `ERROR: ${error.message}` });
    }
  };

  const googleAuth = async (req, res) => {
    try {
      let user = await User.findOne({ where: { email: req.user.emails[0].value } });
      if (!user) {
        
        user = await User.create({
          email: req.user.emails[0].value,
          username: req.user.displayName,
          admin: false  
        });
      }
  
      const tokenData = {
        id: user.id,
        email: user.email,
        username: user.username,
        admin: user.admin
      };
  
      const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: 3600000,
      });
  
      res.cookie("access-token", token, {
        httpOnly: true,
        sameSite: "strict"
      }).redirect("/");
    } catch (error) {
      res.status(400).json({ message: `ERROR: ${error.message}` });
    }
  };

const signOutUser = async (req, res) => {
    try {
      res.clearCookie("access-token").status(200).json({ success: true, message: 'Successfully logged out' });
    } catch (error) {
      res.status(400).json({ message: `ERROR: ${error.message}` });
    }
  };



const controllers = {
  signUpUser,
  signInUser,
  googleAuth,
  signOutUser,
};

module.exports = controllers;
