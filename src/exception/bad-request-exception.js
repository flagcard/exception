const httpstatus = require('http-status');
const Exception = require('./exception');

class BadRequestException extends Exception {
  constructor(message) {
    super(message);
    this.status = httpstatus.BAD_REQUEST;
  }
}

module.exports = BadRequestException;
