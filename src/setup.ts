function setupEnvVars(): void {
  const vars = [
    'MAP_TOKEN',
    'PORT',
    'CORS_ORIGIN',
    'PASSWORD',
    'USERNAME',
    'SECRET_KEY',
  ];

  for (const envVar of vars) {
    if (!process.env[envVar]) {
      throw new Error(`Environment variable ${envVar} is not set!`);
    }
  }
}

export default function setup(): void {
  setupEnvVars();
}
