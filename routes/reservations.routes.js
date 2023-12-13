const express = require('express');
const reservation_controller = require("../controllers/reservations.controller")
const router = express.Router();

router.get('/reservation/:id', reservation_controller.getReservation);
router.get('/reservation', reservation_controller.getAllReservations);
router.post('/reservation', reservation_controller.createReservation);
router.put('/reservation/:id', reservation_controller.updateReservation);
router.delete('/reservation/:id', reservation_controller.deleteReservation);
module.exports = router