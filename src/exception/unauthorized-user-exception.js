const httpstatus = require('http-status');
const Exception = require('./exception');

class UnauthorizedUserException extends Exception {
  constructor(message) {
    super(message);
    this.code = httpstatus.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedUserException;
