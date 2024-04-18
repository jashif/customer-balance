const { log } = require('../../utils/logger');

function requestMiddleware(req, res, next) {
  log(`Request: ${req.method} ${req.url}`, 'info');
  next();
}
module.exports = { requestMiddleware };
