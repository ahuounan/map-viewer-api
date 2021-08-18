import fs from 'fs';

import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';

const boatRampController = {
  get(_req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).type('application/json');

    return new Promise<void>(resolve => {
      const stream = fs.createReadStream('data/boat_ramps.geojson').pipe(res);

      stream.on('close', () => {
        res.end();
        resolve(next());
      });
      stream.on('error', () => {
        resolve(next(createHttpError(500, 'Server failed to read data.')));
      });
    });
  },
};

export default boatRampController;
