const express = require('express');
const reservation_controller = require("../controllers/reservations.controller")
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken")

router.get('/reservation/:id', verifyToken, reservation_controller.getReservation);
router.get('/reservation', /*verifyToken,*/ reservation_controller.getAllReservations);
router.post('/reservation', /*verifyToken,*/ reservation_controller.createReservation);
router.put('/reservation/:id', verifyToken, reservation_controller.updateReservation);
router.delete('/reservation/:id', verifyToken, reservation_controller.deleteReservation);
module.exports = router