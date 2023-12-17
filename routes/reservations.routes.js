const express = require('express');
const reservation_controller = require("../controllers/reservations.controller")
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken")

router.get('/reservation/:id', reservation_controller.getReservation);
router.get('/all/reservation/', reservation_controller.getAllReservations);
router.get('/reservation/user/:id', reservation_controller.getReservationsByUserId);
router.post('/reservation', reservation_controller.createReservation);
router.put('/reservation/:id', verifyToken, reservation_controller.updateReservation);
router.delete('/reservation/:id', verifyToken, reservation_controller.deleteReservation);
module.exports = router