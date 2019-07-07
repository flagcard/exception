const httpstatus = require('http-status');
const Exception = require('./exception');

class NotFoundException extends Exception {
  constructor(message) {
    super(message);
    this.code = httpstatus.NOT_FOUND;
  }
}

module.exports = NotFoundException;
