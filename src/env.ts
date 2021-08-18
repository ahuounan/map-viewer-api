import dotenv from 'dotenv';

import Logger from '@lib/logger';

dotenv.config();

export const env: Record<string, string> = (() => {
  const vars = [
    'PASSWORD',
    'USERNAME',
    'SECRET_KEY',
    'CORS_ORIGIN',
    'MAP_TOKEN',
  ];

  for (const envVar of vars) {
    if (!process.env[envVar]) {
      throw new Error(`Environment variable ${envVar} not set.`);
    }
  }

  Logger.info('CORS_ORIGIN: ', process.env.CORS_ORIGIN);

  return {
    password: process.env.PASSWORD,
    username: process.env.USERNAME,
    secretKey: process.env.SECRET_KEY,
    corsOrigin: process.env.CORS_ORIGIN,
    mapToken: process.env.MAP_TOKEN,
  } as Record<string, string>;
})();
