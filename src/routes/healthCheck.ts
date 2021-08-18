import express from 'express';

import healthCheckController from '@controllers/healthCheck';

const healthCheckRouter = express.Router();

healthCheckRouter.get('/health-check', healthCheckController.get);

export default healthCheckRouter;
