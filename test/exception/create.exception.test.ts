import { CreateException } from "../../index";

describe("CreateException", () => {
  it("CreateException class", () => {
    const exception = new CreateException("some message");
    expect(exception.name).toEqual("CreateException");
    expect(exception.message).toEqual("some message");
    expect(exception.status).toEqual(201);
  });
});
