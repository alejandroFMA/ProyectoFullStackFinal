const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyAdmin = express.Router();

verifyAdmin.use((req, res, next) => {
    const token = req.cookies['access-token'];

    if (!token) {
        return res.status(401).json({ message: "Acceso no autorizado" });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);

        if (user.admin) {
            next();
        } else {
            res.status(403).json({ message: "Acceso denegado: no eres administrador" });
        }
    } catch (error) {
        res.status(401).json({ message: "Token inválido o expirado" });
    }
});
  
module.exports = verifyAdmin;