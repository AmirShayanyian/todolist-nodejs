const { Router } = require('express');
const { TodoRoutes } = require('./to-do.routes');
const router = Router();

router.use('/todo', TodoRoutes);

module.exports = {
  IndexRoute: router,
};
