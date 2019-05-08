const httpstatus = require('http-status');
const Exception = require('./exception');

class MethodNotAllowedException extends Exception {
  constructor(message) {
    super(message);
    this.status = httpstatus.METHOD_NOT_ALLOWED;
  }
}

module.exports = MethodNotAllowedException;
