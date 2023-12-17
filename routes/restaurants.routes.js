const express = require('express');
const restaurant_controller = require("../controllers/restaurants.controller")
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken")
const verifyAdmin = require("../middlewares/verifyAdmin") 
router.get('/restaurant/:id', restaurant_controller.getRestaurant);
router.get('/restaurant/name', restaurant_controller.getRestaurantByName);
router.get('/restaurant', restaurant_controller.getAllRestaurants )
router.post('/restaurant', verifyAdmin, restaurant_controller.createRestaurant);
router.put('/restaurant/:id', verifyAdmin, restaurant_controller.updateRestaurant);
router.delete('/restaurant/:id', verifyAdmin, restaurant_controller.deleteRestaurant);
module.exports = router