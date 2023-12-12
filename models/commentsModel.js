const Comment = require('../schema/');

// const getReservationByDate = async (ReservationId) => {
//          try{
//             const ReservationId = await Reservation.findByPk(restaurantId);
//             return restaurant || 'Restaurante no encontrado';
      
//     } catch (error) {
//         throw error;
//     }
// };


const getAllCommentsByEmail = async () => {
    try {
        return await Restaurant.findAll(); 
    } catch (error) {
        throw error;
    }
};

const getCommentsByRestaurant = async () => {
    try {
        return await Restaurant.findAll(); 
    } catch (error) {
        throw error;
    }
};



const createComment = async (restaurantData) => {
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


const deleteComment = async (restaurantId) => {
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
