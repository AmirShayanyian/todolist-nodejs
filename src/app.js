const express = require('express');
const mongo = require('../config/mongoose.config');
const notFound = require('./middlewares/not-found.handler');
require('dotenv').config();
const dataBaseUrl = process.env.MONGO_URL;

const app = express();
mongo(dataBaseUrl);

app.get('/', (req, res, next) => {
  return res.json({
    message: 'Welcome to our website.',
  });
});
app.use(notFound);
module.exports = app;
