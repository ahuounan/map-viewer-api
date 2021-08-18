import { NextFunction, Request, Response } from 'express';

const healthCheckController = {
  get(_req: Request, res: Response, next: NextFunction) {
    res.status(200).send('ok');
  },
};

export default healthCheckController;
