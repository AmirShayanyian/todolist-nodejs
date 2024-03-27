const express = require('express');
const mongo = require('../config/mongoose.config');
const notFound = require('./middlewares/not-found.handler');
const errorHandler = require('./middlewares/global-error.handler');
const { IndexRoute } = require('./routes/index.router');
require('dotenv').config();
const dataBaseUrl = process.env.MONGO_URL;

const app = express();
mongo(dataBaseUrl);
app.use(IndexRoute);
app.get('/', (req, res, next) => {
  try {
    sad;
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
