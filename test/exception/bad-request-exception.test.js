/* global expect */
const BadRequestException = require('../../src/exception/bad-request-exception');

describe('BadRequestException', () => {
  it('BadRequestException class', () => {
    const exception = new BadRequestException('some message');
    expect(exception.name).to.be.equal('BadRequestException');
    expect(exception.message).to.be.equal('some message');
    expect(exception.status).to.be.equal(400);
  });
});
