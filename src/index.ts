import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import Logger from '@lib/logger';
import authMiddleware from '@middleware/auth';
import errorMiddleware from '@middleware/error';
import loggerMiddleware from '@middleware/logger';
import authRouter from '@routes/auth';
import dataRouter from '@routes/data';
import healthCheckRouter from '@routes/healthCheck';

import setup from './setup';

dotenv.config();
setup();

const app = express();

app.use(loggerMiddleware);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
  })
);
app.use('/health-check', healthCheckRouter);
app.use('/auth', authRouter);
app.use('/data', authMiddleware, dataRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  Logger.info(`Server online at port ${process.env.PORT}`);
});
