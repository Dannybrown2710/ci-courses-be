const express = require('express');
const verifyToken = require('../../User/middleware/verify');
const router = express.Router();
const menuController = require('../controller/')
router.get('/:restaurantId',verifyToken, menuController.getMenu )
module.exports = router;