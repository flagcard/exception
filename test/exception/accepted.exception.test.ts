import { AcceptedException } from "../../index";

describe("AcceptedException", () => {
  it("AcceptedException class", () => {
    const exception = new AcceptedException("some message");
    expect(exception.name).toEqual("AcceptedException");
    expect(exception.message).toEqual("some message");
    expect(exception.status).toEqual(201);
  });
});
