const express = require('express');
const mongo = require('../config/mongoose.config');
require('dotenv').config();
const dataBaseUrl = process.env.MONGO_URL;

const app = express();
mongo(dataBaseUrl);

app.get('/', (req, res, next) => {
  return res.json({
    message: 'Welcome to our website.',
  });
});

module.exports = app;
