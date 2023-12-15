const express = require('express');
const comment_controller = require("../controllers/comments.controller")
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken")

router.get('/comment/:id', comment_controller.getComment);
router.get('/comment/restaurant/:id', comment_controller.getCommentsbyRestaurantID);
router.post('/comment',comment_controller.createComment);
router.put('/comment/:id', comment_controller.updateComment);
router.delete('/comment/:id', verifyToken, comment_controller.deleteComment);
module.exports = router
