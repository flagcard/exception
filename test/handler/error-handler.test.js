const sinon = require('sinon');
const httpstatus = require('http-status');
const Exception = require('../../src/exception/exception');
const BadRequestException = require('../../src/exception/bad-request-exception');
const MethodNotAllowedException = require('../../src/exception/method-not-allowed-exception');
const NotFoundException = require('../../src/exception/not-found-exception');
const UnauthorizedUserException = require('../../src/exception/unauthorized-user-exception');
const errorHandler = require('../../src/handler/error-handler');

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
    errorHandler(exception, {}, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].code).to.be.equal(httpstatus.BAD_REQUEST);
    expect(json.getCall(0).args[0].name).to.be.equal('BadRequestException');
  });

  it('MethodNotAllowedException error', () => {
    const exception = new MethodNotAllowedException('MethodNotAllowedException');
    errorHandler(exception, {}, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].code).to.be.equal(httpstatus.METHOD_NOT_ALLOWED);
    expect(json.getCall(0).args[0].name).to.be.equal('MethodNotAllowedException');
  });

  it('NotFoundException error', () => {
    const exception = new NotFoundException('NotFoundException');
    errorHandler(exception, {}, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].code).to.be.equal(httpstatus.NOT_FOUND);
    expect(json.getCall(0).args[0].name).to.be.equal('NotFoundException');
  });

  it('UnauthorizedUserException error', () => {
    const exception = new UnauthorizedUserException('UnauthorizedUserException');
    errorHandler(exception, {}, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].code).to.be.equal(httpstatus.UNAUTHORIZED);
    expect(json.getCall(0).args[0].name).to.be.equal('UnauthorizedUserException');
  });

  it('Exception error', () => {
    const exception = new Exception('Exception');
    errorHandler(exception, {}, res);
    expect(json.called).to.be.equal(true);
    expect(json.getCall(0).args[0].code).to.be.equal(httpstatus.INTERNAL_SERVER_ERROR);
    expect(json.getCall(0).args[0].name).to.be.equal('Exception');
  });
});
