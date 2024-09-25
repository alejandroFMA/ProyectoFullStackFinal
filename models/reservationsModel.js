const { Reservation, Restaurant, User } = require("../schemas/association");

const getReservation = async (reservationId) => {
  try {
    const reservation = await Reservation.findByPk(reservationId);
    return reservation || "Restaurante no encontrado";
  } catch (error) {
    throw error;
  }
};

const getAllReservations = async () => {
  try {
    return await Reservation.findAll({
      include: [
        { model: User, attributes: ["email", "username"] },
        {
          model: Restaurant,
          attributes: ["name"],
        },
      ],
    });
  } catch (error) {
    throw error;
  }
};

const getReservationsByUserId = async (userId) => {
  const reservations = await Reservation.findAll({
    where: { id_user: userId },
    include: [
      {
        model: Restaurant,
        attributes: ["name", "address"],
      },
    ],
  });
  return reservations;
};

const createReservation = async (reservationData) => {
  try {
    const reservation = await Reservation.create(reservationData);
    return reservation;
  } catch (error) {
    throw error;
  }
};

const updateReservation = async (reservationId, updateData) => {
  try {
    const reservation = await Reservation.findByPk(reservationId);
    if (reservation) {
      await reservation.update(updateData);
      return reservation;
    }
    throw new Error("Reserva no encontrada");
  } catch (error) {
    throw error;
  }
};

const deleteReservation = async (reservationId) => {
  try {
    const reservation = await Reservation.findByPk(reservationId);
    if (reservation) {
      await reservation.destroy();
      return reservation;
    } else {
      throw new Error("Restaurante no encontrado");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getReservation,
  getAllReservations,
  getReservationsByUserId,
  createReservation,
  updateReservation,
  deleteReservation,
};
