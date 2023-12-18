const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../schemas/sql_users'); 

const secret = process.env.JWT_SECRET;

const verifyToken = express.Router();

verifyToken.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).send('No token provided, please login');
  }

  jwt.verify(token, secret, async (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }

    try {
      const user = await User.findOne({ where: { email: decoded.email } });
      if (!user) {
        return res.status(401).send('User not found');
      }

      req.user = user; 
      next();
    } catch (dbError) {
      return res.status(500).send('Database error');
    }
  });
});

module.exports = verifyToken;
