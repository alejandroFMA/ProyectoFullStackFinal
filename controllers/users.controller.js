const User = require("../models/usersModel");

const getUser = async (req, res) => {
  try {
      const userId = req.params.id; 
      const user = await User.getUser(userId); 
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const getUserByEmail = async (req, res) => {
    try {
        const email = req.query.email;
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        const user = await User.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers(); 
        if (users.length === 0) { 
            return res.status(404).json({ message: 'Users not found' });
        }
        res.json(users); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createUser = async (req, res) => {
  try {
      const userData = req.body; 
      const user = await User.createUser(userData)
      res.status(201).json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};



const updateUser = async (req, res) => {
  try {
      const userId = req.params.id; 
      const updateData = req.body; 
      const user = await User.updateUser(userId, updateData)
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};



const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.deleteUser(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
  
        res.status(200).json({ message: 'User successfully deleted' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {getUser, getUserByEmail, getAllUsers, createUser, updateUser, deleteUser};


