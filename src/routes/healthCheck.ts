import express from 'express';

import healthCheckController from '@controllers/healthCheck';

const healthCheckRouter = express.Router();

healthCheckRouter.get('/', healthCheckController.get);

export default healthCheckRouter;
