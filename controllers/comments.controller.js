const Comment = require("../models/commentsModel");

const getComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.getComment(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const getRestaurantByName = async (req, res) => {
//     try {
//         const name = req.query.name;
//         if (!name) {
//             return res.status(400).json({ message: 'Nombre es requerido' });
//         }
//         const restaurant = await Restaurant.getRestaurantsByName(name);
//         if (!restaurant) {
//             return res.status(404).json({ message: 'Restaurante no encontrado' });
//         }
//         res.json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const getCommentsbyRestaurantID = async (req, res) => {
  try {
    const restaurantId = req.query.params;
    if (!restaurantId) {
      return res.status(400).json({ message: "ID de restaurante requerido" });
    }

    const comments = await Comment.getCommentsbyRestaurantID(restaurantId);

    if (!comments) {
      return res.status(404).json({ message: "Comentarios no encontrados" });
    }

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const comment = await Comment.getAllComments();
    if (comment.length === 0) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const commentData = req.body;
    const comment = await Comment.createComment(commentData);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const updateData = req.body;
    const comment = await Comment.updateReservation(commentId, updateData);
    if (comment) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Reservation.deleteReservation(commentId);
    if (comment) {
      return res.status(404).json({ message: "Comentario no encontrado" });
    }

    res.status(200).json({ message: "Comentario eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getComment,
  getAllComments,
  getCommentsbyRestaurantID,
  createComment,
  updateComment,
  deleteComment,
};
