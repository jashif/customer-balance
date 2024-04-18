const express = require('express');
const balanceRoute = require('./balance.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/events',
    route: balanceRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
