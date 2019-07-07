const UnauthorizedUserException = require('../../src/exception/unauthorized-user-exception');

describe('UnauthorizedUserException', () => {
  it('UnauthorizedUserException class', () => {
    const exception = new UnauthorizedUserException('some message');
    expect(exception.name).to.be.equal('UnauthorizedUserException');
    expect(exception.message).to.be.equal('some message');
    expect(exception.code).to.be.equal(401);
  });
});
