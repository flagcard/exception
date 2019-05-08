const MethodNotAllowedException = require('../../src/exception/method-not-allowed-exception');

describe('MethodNotAllowedException', () => {
  it('MethodNotAllowedException class', () => {
    const exception = new MethodNotAllowedException('some message');
    expect(exception.name).to.be.equal('MethodNotAllowedException');
    expect(exception.message).to.be.equal('some message');
    expect(exception.status).to.be.equal(405);
  });
});
