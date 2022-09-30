import { NOT_FOUND } from "http-status";
import Exception from "./exception";

export default class ValidationErrorException extends Exception {
  constructor(message: string) {
    super(message);
    this.status = NOT_FOUND;
  }
}
