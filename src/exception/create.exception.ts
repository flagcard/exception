import { CREATED } from "http-status";
import Exception from "./exception";

export default class CreateException extends Exception {
  constructor(message: string) {
    super(message);
    this.status = CREATED;
  }
}
