import { BAD_REQUEST } from 'http-status';
import Exception from './exception';

export default class BadRequestException extends Exception {
  constructor(message: string) {
    super(message);
    this.status = BAD_REQUEST;
  }
}
