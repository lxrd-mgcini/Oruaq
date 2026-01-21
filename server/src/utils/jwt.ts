import jwt from "jsonwebtoken";
import { config } from "../config/app.config";

export const generateJWT = (userId: string) => {
  const token = jwt.sign({ userId }, config.JWT_SECRET, { expiresIn: "14d" });

  return token;
};
