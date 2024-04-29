const express = require('express');
const mongo = require('../config/mongoose.config');
const swaggerSpecs = require('../config/swagger.config');
const swaggerUi = require('swagger-ui-express');
const notFound = require('./middlewares/not-found.handler');
const errorHandler = require('./middlewares/global-error.handler');
const compression = require('compression');
const { IndexRoute } = require('./routes/index.router');
require('dotenv').config();
const dataBaseUrl = process.env.MONGO_URL;

const app = express();
mongo(dataBaseUrl);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use(IndexRoute);
app.get('/', (req, res, next) => {
  try {
    return res.json({
      message: 'Welcome to our website.',
    });
  } catch (error) {
    next(error);
  }
});
app.use(notFound);
app.use(errorHandler);

module.exports = app;
