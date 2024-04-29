const { Router } = require('express');
const { TodoRoutes } = require('./to_do/to-do.router');
const router = Router();

router.use('/todo', TodoRoutes);

module.exports = {
  IndexRoute: router,
};
