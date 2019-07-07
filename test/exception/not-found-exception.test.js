const NotFoundException = require('../../src/exception/not-found-exception');

describe('NotFoundException', () => {
  it('NotFoundException class', () => {
    const exception = new NotFoundException('some message');
    expect(exception.name).to.be.equal('NotFoundException');
    expect(exception.message).to.be.equal('some message');
    expect(exception.code).to.be.equal(404);
  });
});
