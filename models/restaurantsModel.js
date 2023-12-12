const Restaurant = require('../schemas/sql_restaurants');


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

module.exports = { getRestaurant, getAllRestaurants, createRestaurant, updateRestaurant, deleteRestaurant };