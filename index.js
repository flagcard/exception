const Exception = require('./src/exception/exception');
const BadRequestException = require('./src/exception/bad-request-exception');
const MethodNotAllowedException = require('./src/exception/method-not-allowed-exception');
const NotFoundException = require('./src/exception/not-found-exception');
const UnauthorizedUserException = require('./src/exception/unauthorized-user-exception');
const ErrorHandler = require('./src/handler/error-handler');

module.exports = {
  Exception,
  BadRequestException,
  MethodNotAllowedException,
  NotFoundException,
  UnauthorizedUserException,
  ErrorHandler,
};
