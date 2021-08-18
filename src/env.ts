import dotenv from 'dotenv';

dotenv.config();

const vars = ['PASSWORD', 'USERNAME', 'SECRET_KEY', 'CORS_ORIGIN', 'MAP_TOKEN'];

for (const envVar of vars) {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} not set.`);
  }
}

export const env: Record<string, string> = {
  password: process.env.PASSWORD,
  username: process.env.USERNAME,
  secretKey: process.env.SECRET_KEY,
  corsOrigin: process.env.CORS_ORIGIN,
  mapToken: process.env.MAP_TOKEN,
} as Record<string, string>;
