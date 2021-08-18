import cors from 'cors';
import express from 'express';

import Logger from '@lib/logger';
import authMiddleware from '@middleware/auth';
import errorMiddleware from '@middleware/error';
import loggerMiddleware from '@middleware/logger';
import authRouter from '@routes/auth';
import dataRouter from '@routes/data';
import healthCheckRouter from '@routes/healthCheck';

import { env } from './env';

const app = express();

app.use(loggerMiddleware);
app.use(
  cors({
    origin: env.crossOrigin,
    optionsSuccessStatus: 200,
  })
);
app.use('/health-check', healthCheckRouter);
app.use('/auth', authRouter);
app.use('/data', authMiddleware, dataRouter);

app.use(errorMiddleware);

app.listen(env.port, () => {
  Logger.info(`Server online at port ${env.port}`);
});
