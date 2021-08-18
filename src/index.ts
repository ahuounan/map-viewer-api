import cors from 'cors';
import express from 'express';

import Logger from '@lib/logger';
import authMiddleware from '@middleware/auth';
import errorMiddleware from '@middleware/error';
import loggerMiddleware from '@middleware/logger';
import authRouter from '@routes/auth';
import dataRouter from '@routes/data';

const app = express();

app.use(loggerMiddleware);
app.use(
  cors({
    origin: process.env.API_HOST,
    optionsSuccessStatus: 200,
  })
);
app.use('/auth', authRouter);
app.use('/data', authMiddleware, dataRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  Logger.info(`Server online at port ${process.env.PORT}`);
});
