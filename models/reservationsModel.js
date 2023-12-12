const Reservation = require('../schemas/sql_reservations');

const getReservation = async (reservationId) =>{
    try{
        const reservation = await Reservation.findByPk(reservationId);
        return reservation || 'Restaurante no encontrado';
  
} catch (error) {
    throw error;
}
};

const getReservationByDate = async (reservationId) => {
         try{
            const reservation = await Reservation.findByPk(reservationId);
            return reservation || 'Reservae no encontrado';
      
    } catch (error) {
        throw error;
    }
};


// const getAllReservationsByEmail = async () => {
//     try {
//         return await Reservation.findAll(); 
//     } catch (error) {
//         throw error;
//     }
// };

const getAllReservations = async () => {
    try {
        return await Reservation.findAll(); 
    } catch (error) {
        throw error;
    }
};


const createReservation = async (reservationData) => {
    try {
        const reservation = await Reservation.create(reservationData);
        return reservation;
    } catch (error) {
        throw error;
    }
}

const updateReservation = async (reservationId, updateData) => {
    try {
        const reservation = await Reservation.findByPk(reservationId);
        if (reservation) {
            await reservation.update(updateData);
            return reservation;
        }
        throw new Error('Reserva no encontrada');
    } catch (error) {
        throw error;
    }
}


const deleteReservation = async (reservationId) => {
    try {
        const reservation = await Reservation.findByPk(reservationId);
        if (reservation) {
            await reservation.destroy();
            return reservation; 
        } else {
            throw new Error('Restaurante no encontrado');
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { getReservation, getAllReservations, createReservation, updateReservation,deleteReservation};
