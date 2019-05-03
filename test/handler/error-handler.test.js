/* global expect */
const sinon = require('sinon');
const Exception = require('../../src/exception/exception');
const BadRequestException = require('../../src/exception/bad-request-exception');
const ErrorHandler = require('../../src/handler/error-handler');

describe('ErrorHandler', () => {
  let res;
  let json;

  beforeEach(() => {
    json = sinon.fake();
    res = {
      status: () => ({
        json,
      }),
    };
  });

  it('BadRequestException error', () => {
    const exception = new BadRequestException('some message');
    ErrorHandler(exception, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].status).to.be.equal('some message');
  });

  it('Exception error', () => {
    const exception = new Exception('some message');
    ErrorHandler(exception, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].status).to.be.equal('INTERNAL_SERVER_ERROR');
  });
});
