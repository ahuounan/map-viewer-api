import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';

import Logger from '@lib/logger';

function errorMiddleware(
  err: HttpError,
  _req: Request,
  res: Response,
  next: NextFunction
): void {
  Logger.error(err.stack);
  if (!err.status || !err.message) {
    res.status(500).send('Server error.');
    return next();
  }

  res.status(err.status).send(err.message);
  return next();
}

export default errorMiddleware;
