const express = require('express');
const user_controller = require("../controllers/users.controller")
const router = express.Router();

router.get('/user:id', user_controller.getUser);
router.get('/user?=email', user_controller.deleteUser)
router.post('/user', user_controller.createUser);
router.put('/user:id', user_controller.updateUser);
router.delete('/user:id', user_controller.deleteUser);
module.exports = router