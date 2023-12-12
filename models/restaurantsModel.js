const Restaurant = require('../schemas/sql_restaurants');
const Reservation = require('../schemas/sql_reservations')
const Comment =require('../schemas/sql_reservations')


const getRestaurant = async (restaurantId) => {
         try{
            const restaurant = await Restaurant.findByPk(restaurantId);
            return restaurant || 'Restaurante no encontrado';
      
    } catch (error) {
        throw error;
    }
};


const getAllRestaurants = async () => {
    try {
        return await Restaurant.findAll(); 
    } catch (error) {
        throw error;
    }
};


const getRestaurantsByName = async (name) => {
    try {
        if (name) {
            const restaurant = await Restaurant.findOne({ where: { name: name } });
            return restaurant  || 'Restaurante no encontrado';
        } else {
            throw new Error('Nombre no proporcionado');
        }
    } catch (error) {
        throw error;
    }
};



const createRestaurant = async (restaurantData) => {
    try {
        const restaurant = await Restaurant.create(restaurantData);
        return restaurant;
    } catch (error) {
        throw error;
    }
}


const updateRestaurant = async (restaurantId, updateData) => {
    try {
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (restaurant) {
            await restaurant.update(updateData);
            return restaurant;
        }
        throw new Error('Restaurante no encontrado');
    } catch (error) {
        throw error;
    }
}


const deleteRestaurant = async (restaurantId) => {
    try {
        await Comment.destroy({ where: { id_restaurant: restaurantId } });
        await Reservation.destroy({ where: { id_restaurant: restaurantId } });
        //se borran todas las filas dependientes de esta tabla
        const rows = await Restaurant.destroy({ where: { id_restaurant: restaurantId } }); 

        if (rows === 0) {
            throw new Error('Restaurante no encontrado');
        }

        return { message: 'Restaurante borrado', restaurantId: restaurantId };
    } catch (error) {
        throw error;
    }
}

module.exports = { getRestaurant, getAllRestaurants, getRestaurantsByName, createRestaurant, updateRestaurant, deleteRestaurant };