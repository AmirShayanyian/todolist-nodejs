async function notFound(req, res, next) {
  try {
    return res.send({
      status: 404,
      type: 'Not Found',
      message: `Route ${req.url} not found `,
    });
  } catch (err) {
    console.log('err : ', err);
  }
}
module.exports = notFound;
