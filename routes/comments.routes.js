const express = require('express');
const comment_controller = require("../controllers/comments.controller")
const router = express.Router();

router.get('/comment/:id', comment_controller.getComment);
router.get('/comment', comment_controller.getAllComments);
router.post('/comment', comment_controller.createComment);
router.put('/comment/:id', comment_controller.updateComment);
router.delete('/comment/:id', comment_controller.deleteComment);
module.exports = router
