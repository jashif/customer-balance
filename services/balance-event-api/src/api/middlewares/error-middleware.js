const { log } = require("../../utils/logger");

function errorMiddleware(err, req, res, _next) {
  const responseBody = err.data || {
    message: err.message,
  };
  const isValidationError = err.name === 'Bad Request';
  log('error',`Error: ${err.message}`, responseBody)
  return res.status(isValidationError ? 400 : err.status ?? 500).send(responseBody);
}
module.exports = { errorMiddleware };
