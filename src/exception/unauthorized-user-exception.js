const httpstatus = require('http-status');
const Exception = require('./exception');

class UnauthorizedUserException extends Exception {
  constructor(message) {
    super(message);
    this.status = httpstatus.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedUserException;
