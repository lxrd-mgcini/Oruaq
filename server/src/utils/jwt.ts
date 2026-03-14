import jwt from "jsonwebtoken";
import { config } from "../config/app.config";
import { UserDocument } from "../models/user.model";

export const generateJWT = (user:UserDocument) => {
  const token = jwt.sign({user}, config.JWT_SECRET, { expiresIn: "14d" });

  return token;
};
