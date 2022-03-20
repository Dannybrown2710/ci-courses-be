const menuRoutes = require('./Menu/routes')
const userRoutes = require('./User/routes')
const restaurantRoutes = require('./Restaurant/routes')
const express = require('express');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/menu',
    route: menuRoutes,
  },
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/restaurant',
    route: restaurantRoutes,
  },
  
];

defaultRoutes.forEach((route) => {
  console.log(route);
  router.use(route.path, route.route);
});
module.exports = router;