import { ACCEPTED } from "http-status";
import Exception from "./exception";

export default class AcceptedException extends Exception {
  constructor(message: string) {
    super(message);
    this.status = ACCEPTED;
  }
}
