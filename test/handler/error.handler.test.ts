/* eslint @typescript-eslint/no-explicit-any: off */
/* eslint @typescript-eslint/no-empty-function: off */
/* eslint  @typescript-eslint/no-unused-vars: off */
import sinon, { SinonSpy } from 'sinon';
import { Request, Response, NextFunction } from 'express';
import {
  BAD_REQUEST, METHOD_NOT_ALLOWED, NOT_FOUND, INTERNAL_SERVER_ERROR, UNAUTHORIZED,
} from 'http-status';
import errorHandler, {
  Exception,
  BadRequestException,
  MethodNotAllowedException,
  NotFoundException,
  UnauthorizedUserException,
} from '../../index';

describe('ErrorHandler', () => {
  let res: any;
  let json: SinonSpy;
  const req: Partial<Request> = {};
  const next: NextFunction = () => {};
  beforeEach(() => {
    json = sinon.fake();
    res = {
      status: (s: number) => ({ json }),
    };
  });

  it('BadRequestException error', () => {
    const exception = new BadRequestException('BadRequestException');
    errorHandler(exception, <Request>req, <Response>res, next);
    expect(json.called).toEqual(true);
    expect(json.getCall(0).args[0].status).toEqual(BAD_REQUEST);
    expect(json.getCall(0).args[0].name).toEqual('BadRequestException');
  });

  it('MethodNotAllowedException error', () => {
    const exception = new MethodNotAllowedException('MethodNotAllowedException');
    errorHandler(exception, <Request>req, <Response>res, next);
    expect(json.called).toEqual(true);
    expect(json.getCall(0).args[0].status).toEqual(METHOD_NOT_ALLOWED);
    expect(json.getCall(0).args[0].name).toEqual('MethodNotAllowedException');
  });

  it('NotFoundException error', () => {
    const exception = new NotFoundException('NotFoundException');
    errorHandler(exception, <Request>req, <Response>res, next);
    expect(json.called).toEqual(true);
    expect(json.getCall(0).args[0].status).toEqual(NOT_FOUND);
    expect(json.getCall(0).args[0].name).toEqual('NotFoundException');
  });

  it('UnauthorizedUserException error', () => {
    const exception = new UnauthorizedUserException('UnauthorizedUserException');
    errorHandler(exception, <Request>req, <Response>res, next);
    expect(json.called).toEqual(true);
    expect(json.getCall(0).args[0].status).toEqual(UNAUTHORIZED);
    expect(json.getCall(0).args[0].name).toEqual('UnauthorizedUserException');
  });

  it('Exception error', () => {
    const exception = new Exception('Exception');
    errorHandler(exception, <Request>req, <Response>res, next);
    expect(json.called).toEqual(true);
    expect(json.getCall(0).args[0].status).toEqual(INTERNAL_SERVER_ERROR);
    expect(json.getCall(0).args[0].name).toEqual('Exception');
  });
});
