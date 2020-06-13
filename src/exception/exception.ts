import { INTERNAL_SERVER_ERROR } from 'http-status';

export default class Exception extends Error {
  public status: number;

  public name: string;

  constructor(message: string) {
    super();
    this.message = message;
    this.status = INTERNAL_SERVER_ERROR;
    this.name = this.constructor.name;
  }
}
