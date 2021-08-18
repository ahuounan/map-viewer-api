import express from 'express';

import authController from '@controllers/auth';

const authRouter = express.Router();

authRouter.post('/', authController.basic);

export default authRouter;
