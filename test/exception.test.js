/* global expect */
const Exception = require('../src/exception');

describe('Exception', () => {
  it('Exception class', () => {
    const exception = new Exception('some message');
    expect(exception.name).to.be.equal('Exception');
    expect(exception.message).to.be.equal('some message');
  });
});
