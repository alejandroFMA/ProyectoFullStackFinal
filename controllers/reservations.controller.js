const Reservation = require("../models/reservationsModel");

const getReservation = async (req, res) => {
  try {
      const reservationId = req.params.id; 
      const reservation = await Reservation.getReservation(reservationId); 
      if (!reservation) {
          return res.status(404).json({ message: 'Reserva no encontrada' });
      }
      res.json(reservation);
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

const getAllReservations = async (req, res) => {
    try {
        const reservation = await Reservation.getAllReservations(); 
        if (reservation.length === 0) { 
            return res.status(404).json({ message: 'Reservas no encontradas' });
        }
        res.json(reservation); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getReservationsByUserId= async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ message: "No se proporcionó el ID del usuario" });
    }

    try {
      const reservations = await Reservation.getReservationsByUserId(id);
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las reservas "+ error.message });
    }
  };


const createReservation= async (req, res) => {
  try {
      const reservationData = req.body; 
      const reservation = await Reservation.createReservation(reservationData);
      res.status(201).json(reservation);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


const updateReservation = async (req, res) => {
  try {
      const reservationId = req.params.id; 
      const updateData = req.body; 
      const reservation = await Reservation.updateReservation(reservationId, updateData)
      if (!reservation) {
          return res.status(404).json({ message: 'Reserva no encontrada' });
      }
      res.json(reservation);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


const deleteReservation = async (req, res) => {
    try {
        const reservationId = req.params.id;
        const reservation = await Reservation.deleteReservation(reservationId);
        if (!reservation) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
  
        res.status(200).json({ message: 'Reserva eliminada' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {getReservation, getAllReservations,getReservationsByUserId, createReservation, updateReservation, deleteReservation};