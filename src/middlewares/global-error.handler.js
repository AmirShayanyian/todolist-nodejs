const chalk = require('chalk');
function errorHandler(err, req, res, next) {
  console.log(chalk.red(err.stack.split(':')[0]),':',err.message);
  const status = err?.statusCodeF ?? 500;
  const message = err?.message ?? 'Something Broke in the server (:';
  return res.send({
    status,
    type: 'Internal Server Error',
    message,
  });
}

module.exports = errorHandler;
