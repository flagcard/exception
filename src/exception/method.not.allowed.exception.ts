import { METHOD_NOT_ALLOWED } from 'http-status';
import Exception from './exception';

export default class MethodNotAllowedException extends Exception {
  constructor(message:string) {
    super(message);
    this.status = METHOD_NOT_ALLOWED;
  }
}
