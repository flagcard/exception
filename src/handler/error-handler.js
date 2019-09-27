/* eslint no-unused-vars: off */
const httpstatus = require('http-status');
const log = require('@flagcard/log');

const logError = (err) => {
  let error;
  try {
    if (err.message && Object.keys(err.message).length) {
      error = JSON.stringify(err.message);
    } else if (err.stack && Object.keys(err.stack).length) {
      error = JSON.stringify(err.stack);
    } else if (err.data && Object.keys(err.data).length) {
      error = JSON.stringify(err.data);
    } else {
      error = JSON.stringify(err);
    }
  } catch (e) {
    error = 'Não foi possível decodificar o erro.';
  }
  log.error(`something went wrong in asgard: ${error}`);
};

module.exports = (err, req, res, next) => {
  logError(err);
  const o = {
    code: err.code || httpstatus.INTERNAL_SERVER_ERROR,
    name: err.name,
    message: err.message || err,
  };
  res.status(o.code).json(o);
};
