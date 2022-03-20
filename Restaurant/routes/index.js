const express = require('express');
const verifyToken = require('../../User/middleware/verify');
const router = express.Router();
const restaurantController = require('../controller/')
router.get('/', restaurantController.getRestaurant )
module.exports = router;