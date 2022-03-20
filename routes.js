const menuRoutes = require('./Menu/routes')
const userRoutes = require('./User/routes')
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
  }
];

defaultRoutes.forEach((route) => {
  console.log(route);
  router.use(route.path, route.route);
});
module.exports = router;