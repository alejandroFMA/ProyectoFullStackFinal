const Reservation = require('../schemas/sql_reservations');



// const getReservationByDate = async (ReservationId) => {
//          try{
//             const ReservationId = await Reservation.findByPk(restaurantId);
//             return restaurant || 'Restaurante no encontrado';
      
//     } catch (error) {
//         throw error;
//     }
// };


const getAllReservationsByEmail = async () => {
    try {
        return await Restaurant.findAll(); 
    } catch (error) {
        throw error;
    }
};

const getAllReservations = async () => {
    try {
        return await Restaurant.findAll(); 
    } catch (error) {
        throw error;
    }
};


const createReservation = async (restaurantData) => {
    try {
        const restaurant = await Restaurant.create(restaurantData);
        return restaurant;
    } catch (error) {
        throw error;
    }
}

// const updateReservation = async (restaurantId, updateData) => {
//     try {
//         const restaurant = await Restaurant.findByPk(restaurantId);
//         if (restaurant) {
//             await restaurant.update(updateData);
//             return restaurant;
//         }
//         throw new Error('Restaurante no encontrado');
//     } catch (error) {
//         throw error;
//     }
// }


const deleteReservation = async (restaurantId) => {
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (restaurant) {
            await restaurant.destroy();
            return restaurant; 
        } else {
            throw new Error('Restaurante no encontrado');
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { };
