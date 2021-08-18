import dotenv from 'dotenv';

dotenv.config();

if (!process.env.PASSWORD) {
  throw new Error('Environment variable PASSWORD not set.');
}

if (!process.env.SECRET_KEY) {
  throw new Error('Environment variable SECRET_KEY not set.');
}

export const env = {
  password: process.env.PASSWORD,
  secretKey: process.env.SECRET_KEY,
};
