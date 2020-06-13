import _Exception from './src/exception/exception';
import _BadRequestException from './src/exception/bad.request.exception';
import _MethodNotAllowedException from './src/exception/method.not.allowed.exception';
import _NotFoundException from './src/exception/not.found.exception';
import _UnauthorizedUserException from './src/exception/unauthorized.user.exception';
import errorHandler from './src/handler/error.handler';

export default errorHandler;
export const Exception = _Exception;
export const BadRequestException = _BadRequestException;
export const MethodNotAllowedException = _MethodNotAllowedException;
export const NotFoundException = _NotFoundException;
export const UnauthorizedUserException = _UnauthorizedUserException;
