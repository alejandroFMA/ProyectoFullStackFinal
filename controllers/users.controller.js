
const express = require("express");
const User = require("../models/usersModel");

const getUser = async (req, res) => {
  try {
      const userId = req.params.userId; 
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
        const email = req.params.email; 
        const user = await User.getUser(email); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
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
      const userId = req.params.userId; 
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
      const userId = req.params.userId; 
      const user = await User.deleteUser(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User successfully deleted' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {getUser, getUserByEmail, createUser, updateUser, deleteUser};


