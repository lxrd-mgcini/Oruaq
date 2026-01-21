import { getEnv } from "../utils/get-env";

export const mailConfig = {
  NO_REPLY_EMAIL_ADDRESS: getEnv("NO_REPLY_EMAIL_ADDRESS"),
  SUPPORT_EMAIL_ADDRESS: getEnv("SUPPORT_EMAIL_ADDRESS"),
  ORDERS_EMAIL_ADDRESS: getEnv("ORDERS_EMAIL_ADDRESS"),
};
