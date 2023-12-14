const express = require('express');
const comment_controller = require("../controllers/comments.controller")
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken")

router.get('/comment/:id', comment_controller.getComment);
router.get('/comment', verifyToken,comment_controller.getAllComments);
router.put('/comment/:id', comment_controller.updateComment);
router.delete('/comment/:id', comment_controller.deleteComment);
module.exports = router
