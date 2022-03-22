const express = require('express');
const verifyToken = require('../../User/middleware/verify');
const router = express.Router();
const restaurantController = require('../controller/')
router.get('/', restaurantController.getRestaurant )
router.put('/',restaurantController.editRestaurant)
router.put('/addMenuItem',restaurantController.addMenuItemToRestaurant)
router.put('/editMenuItem',restaurantController.editMenuItemToRestaurant)
router.put('/deleteMenuItem',restaurantController.deleteMenuItemToRestaurant)
module.exports = router;