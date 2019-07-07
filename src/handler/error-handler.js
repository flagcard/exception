/* eslint no-unused-vars: off */
const httpstatus = require('http-status');

module.exports = (err, req, res, next) => {
  const o = {
    code: err.code,
    name: err.name,
    message: err.message,
  };
  if (!err.code) {
    o.code = httpstatus.INTERNAL_SERVER_ERROR;
    o.message = err;
  }
  res.status(o.code)
    .json(o);
};
