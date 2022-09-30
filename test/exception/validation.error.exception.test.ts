import { ValidationErrorException } from "../../index";

describe("ValidationErrorException", () => {
  it("ValidationErrorException class", () => {
    const exception = new ValidationErrorException("some message");
    expect(exception.name).toEqual("ValidationErrorException");
    expect(exception.message).toEqual("some message");
    expect(exception.status).toEqual(201);
  });
});
