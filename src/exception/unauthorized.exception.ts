import { UNAUTHORIZED } from 'http-status';
import Exception from './exception';

export default class UnauthorizedException extends Exception {
  constructor(message: string) {
    super(message);
    this.status = UNAUTHORIZED;
  }
}
