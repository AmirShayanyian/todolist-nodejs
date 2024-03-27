const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  return res.json({
    message: 'Welcome to our website.',
  });
});

module.exports = app;
