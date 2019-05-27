const httpstatus = require('http-status');
const log = require('@flagcard/log');

module.exports = (err, res) => {
  let statusCode = err.status;
  const o = {
    status: err.message, // Utilizado apenas no servidor de transação
    message: err.message,
  };
  if (!err.status) {
    statusCode = httpstatus.INTERNAL_SERVER_ERROR;
    o.status = 'INTERNAL_SERVER_ERROR';
    o.message = err;
  }
  log.error(JSON.stringify(err));
  res.status(statusCode)
    .json(o);
};
