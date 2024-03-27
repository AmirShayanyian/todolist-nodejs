const mongoose = require('mongoose');
require('dotenv').config();
const MongoConnection = async (url) => {
  await mongoose
    .connect(url, {})
    .then(() => {
      console.log('Connected to Data-Base');
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};
const mongo = async (url) => {
  await MongoConnection(url);
};
module.exports = mongo;
