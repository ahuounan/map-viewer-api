import { Request, Response } from 'express';

const healthCheckController = {
  get(_req: Request, res: Response): void {
    res.status(200).send('ok');
  },
};

export default healthCheckController;
