const sinon = require('sinon');
const Exception = require('../../src/exception/exception');
const BadRequestException = require('../../src/exception/bad-request-exception');
const MethodNotAllowedException = require('../../src/exception/method-not-allowed-exception');
const NotFoundException = require('../../src/exception/not-found-exception');
const UnauthorizedUserException = require('../../src/exception/unauthorized-user-exception');
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
    const exception = new BadRequestException('BadRequestException');
    ErrorHandler(exception, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].status).to.be.equal('BadRequestException');
  });

  it('MethodNotAllowedException error', () => {
    const exception = new MethodNotAllowedException('MethodNotAllowedException');
    ErrorHandler(exception, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].status).to.be.equal('MethodNotAllowedException');
  });

  it('NotFoundException error', () => {
    const exception = new NotFoundException('NotFoundException');
    ErrorHandler(exception, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].status).to.be.equal('NotFoundException');
  });

  it('UnauthorizedUserException error', () => {
    const exception = new UnauthorizedUserException('UnauthorizedUserException');
    ErrorHandler(exception, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].status).to.be.equal('UnauthorizedUserException');
  });

  it('Exception error', () => {
    const exception = new Exception('Exception');
    ErrorHandler(exception, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].status).to.be.equal('INTERNAL_SERVER_ERROR');
  });
});
