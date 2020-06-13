/* eslint @typescript-eslint/no-unused-vars: off */
import log from '@flagcard/log';
import { Request, Response, NextFunction } from 'express';
import Exception from '../exception/exception';

const error = (err: Error): Exception => {
  if (err instanceof Exception) {
    return err;
  }
  return new Exception(err.message);
};

export default (err: Error, req:Request, res: Response, next: NextFunction): void => {
  const exception = error(err);
  log.error(`[status: ${exception.status} - ${exception.message}] ${req.method}: ${req.originalUrl} BODY: ${JSON.stringify(req.body)}`);
  res.status(exception.status).json(exception);
};
