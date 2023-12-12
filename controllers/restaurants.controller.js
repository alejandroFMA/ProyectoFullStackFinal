const Restaurant = require("../models/restaurantsModel");

const getRestaurant = async (req, res) => {
  try {
      const restaurantId = req.params.id; 
      const restaurant = await Restaurant.getRestaurant(restaurantId); 
      if (!restaurant) {
          return res.status(404).json({ message: 'Restaurante no encontrado' });
      }
      res.json(restaurant);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const getRestaurantByName = async (req, res) => {
    try {
        const name = req.query.name;
        if (!name) {
            return res.status(400).json({ message: 'Nombre es requerido' });
        }
        const restaurant = await Restaurant.getRestaurantsByName(name);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurante no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.getAllRestaurants(); 
        if (restaurants.length === 0) { 
            return res.status(404).json({ message: 'Restaurantes no encontrados' });
        }
        res.json(restaurants); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createRestaurant = async (req, res) => {
  try {
      const restaurantData = req.body; 
      const restaurant = await Restaurant.createRestaurant(restaurantData)
      res.status(201).json(restaurant);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


const updateRestaurant = async (req, res) => {
  try {
      const restaurantId = req.params.id; 
      const updateData = req.body; 
      const restaurant = await Restaurant.updateRestaurant(restaurantId, updateData)
      if (!restaurant) {
          return res.status(404).json({ message: 'Restaurantes no encontrados' });
      }
      res.json(restaurant);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};



const deleteRestaurant = async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const restaurant = await Restaurant.deleteRestaurant(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurante no encontrado' });
        }
  
        res.status(200).json({ message: 'Restaurando eliminado' });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

module.exports = {getRestaurant, getRestaurantByName, getAllRestaurants, createRestaurant, updateRestaurant, deleteRestaurant};