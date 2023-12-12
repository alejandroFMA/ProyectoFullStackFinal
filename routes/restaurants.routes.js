const express = require('express');
const user_controller = require("../controllers/users")
const router = express.Router();

router.get('/', user_controller.getUser);
router.post('/', user_controller.createUser);
router.put('/', user_controller.updateUser);
router.delete('/', user_controller.deleteUser);
module.exports = router