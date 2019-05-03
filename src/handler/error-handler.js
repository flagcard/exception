const httpstatus = require('http-status');

module.exports = (err, res) => {
  const message = {
    code: err.status,
    status: err.message,
  };
  if (!err.status) {
    message.code = httpstatus.INTERNAL_SERVER_ERROR;
    message.status = 'INTERNAL_SERVER_ERROR';
  }
  res.status(message.code)
    .json({ status: message.status });
};
