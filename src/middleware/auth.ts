import { NextFunction, Request, Response } from 'express';

import authController from '@controllers/auth';

function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  authController.bearer(req, res, next);

  next();
}

export default authMiddleware;
