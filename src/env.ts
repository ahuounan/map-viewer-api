import dotenv from 'dotenv';

import Logger from '@lib/logger';

dotenv.config();

const vars = [
  'PASSWORD',
  'USERNAME',
  'SECRET_KEY',
  'CORS_ORIGIN',
  'MAP_TOKEN',
  'PORT',
];

for (const envVar of vars) {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} not set.`);
  }
}

Logger.info('CORS_ORIGIN: ', process.env.CORS_ORIGIN);

export const env: Record<string, string> = {
  password: process.env.PASSWORD,
  username: process.env.USERNAME,
  secretKey: process.env.SECRET_KEY,
  corsOrigin: process.env.CORS_ORIGIN,
  mapToken: process.env.MAP_TOKEN,
  port: process.env.PORT,
} as Record<string, string>;
