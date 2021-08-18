import express from 'express';

import boatRampController from '@controllers/boatRamp';

const dataRouter = express.Router();

dataRouter.get('/boat-ramps', boatRampController.get);

export default dataRouter;
