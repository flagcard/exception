import { UNAUTHORIZED } from 'http-status';
import Exception from './exception';

export default class UnauthorizedUserException extends Exception {
  constructor(message: string) {
    super(message);
    this.status = UNAUTHORIZED;
  }
}
