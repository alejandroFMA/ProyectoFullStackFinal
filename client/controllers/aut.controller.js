const jwt = require("jsonwebtoken");
const User = require("../schemas/sql_users");
const bcrypt = require('bcrypt');
require("dotenv").config();

const signUpUser = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        await User.create({ email: req.body.email });
        res.status(201).redirect("/");
      } else {
        res
          .status(409)
          .send({ success: false, message: `Email already registered.` });
      }
    } catch (error) {
      res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
  };
  
  const loginUser = async (req, res) => {
    try {
      const email = req.body.email || "";
      const password = req.body.password || "";
      if (email && password) {
        let user = await User.findOne({ email: email });
        if (!user) {
          res
            .status(400)
            .json({ success: false, message: `User does not exist.` });
        } else {
          user.comparePassword(password, async (error, isMatch) => {
            if (isMatch && !error) {
              await User.updateOne({ email: user.email }, { logged: true });
              user = await User.findOne(
                { email: user.email },
                "-_id -__v -password"
              );
              const token = jwt.sign(user.toJSON(), `${process.env.JWT_SECRET}`, {
                expiresIn: 3600000,
              });
              if (user.role == 'admin') {
                res
                  .cookie("access-token", token, {
                    httpOnly: true,
                    sameSite: "strict"
                  })
                  .redirect("/HomeAdmin");
              } else {
                res
                  .cookie("access-token", token, {
                    httpOnly: true,
                    sameSite: "strict"
                  })
                  .redirect("/HomeAdmin");
              }
            } else {
              res
                .status(401)
                .json({ success: false, message: `Invalid password.` });
            }
          });
        }
      }
    } catch (error) {
      res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
  };


  const signOut = async (req, res) => {
    try {
      await User.findOneAndUpdate(
        { email: req.cookies.email },
        { logged: false }
      );
      req.logout(function (err) {
        if (err) {
          return next(err);
        }
        req.session.destroy();
        res.clearCookie('movieapp-user');
        res.clearCookie("access-token").redirect("/");
      });
    } catch (error) {
      res.status(400).json({ message: `ERROR: ${error.stack}` });
    }
  };