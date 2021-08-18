import { default as atob } from 'atob';
import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';

import { env } from '@src/env';

const authController = {
  async basic(req: Request, res: Response, next: NextFunction): Promise<void> {
    const auth = req.headers.authorization;
    if (!auth) {
      return next(createHttpError(401, 'Unauthorized.'));
    }
    const [, b64] = auth.split('Basic ');

    let decoded;
    try {
      decoded = atob(b64);
    } catch (e) {
      return next(createHttpError(400, 'Malformed auth token.'));
    }

    const [username, password] = decoded.split(':');
    if (username !== process.env.USERNAME) {
      return next(createHttpError(401, 'Unauthorized.'));
    }

    const result = await bcrypt.compare(password, env.password);
    if (result) {
      const token = jwt.sign(
        { username, mapToken: process.env.MAP_TOKEN },
        env.secretKey,
        {
          expiresIn: '1h',
        }
      );

      res.type('application/json').status(200).send(
        JSON.stringify({
          token,
        })
      );

      return next();
    }

    return next(createHttpError(401, 'Unauthorized.'));
  },
  bearer(req: Request, _res: Response, next: NextFunction): void {
    const auth = req.headers.authorization;
    if (!auth) {
      return next(createHttpError(401, 'Unauthorized'));
    }

    const [, b64] = auth.split('Bearer ');
    try {
      jwt.verify(b64, env.secretKey);
    } catch (e) {
      return next(createHttpError(401, 'Unauthorized'));
    }
  },
};

export default authController;
