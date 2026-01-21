import { getEnv } from "../utils/get-env";

export const config = {
  PORT: getEnv("PORT"),
  DATABASE_URL: getEnv("MONGO_URL"),
  BASE_PATH: getEnv("BASE_PATH"),
  AUTH_SALT: parseInt(getEnv("AUTH_SALT")),
  JWT_SECRET: getEnv("JWT_SECRET"),
  RESEND_API_KEY: getEnv("RESEND_API_KEY"),
  CLIENT_URL: getEnv("CLIENT_URL"),
};
