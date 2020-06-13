import { FORBIDDEN } from 'http-status';
import Exception from './exception';

export default class ForbiddenException extends Exception {
  constructor(message: string) {
    super(message);
    this.status = FORBIDDEN;
  }
}
