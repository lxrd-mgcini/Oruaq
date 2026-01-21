import "dotenv/config";

export function getEnv(key: string) {
  const value = process.env[key];

  if (value === undefined) {
    throw new Error(`Environmnt variable ${key} not defined`);
  }

  return value;
}
