import Exception from './src/exception/exception';
import BadRequestException from './src/exception/bad.request.exception';
import MethodNotAllowedException from './src/exception/method.not.allowed.exception';
import NotFoundException from './src/exception/not.found.exception';
import ForbiddenException from './src/exception/forbidden.exception';
import UnauthorizedException from './src/exception/unauthorized.exception';
import errorHandler from './src/handler/error.handler';

export default errorHandler;

export {
  errorHandler,
  Exception,
  BadRequestException,
  MethodNotAllowedException,
  NotFoundException,
  ForbiddenException,
  UnauthorizedException,
};
