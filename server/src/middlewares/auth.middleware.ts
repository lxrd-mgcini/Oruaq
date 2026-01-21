import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config/app.config";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) throw new Error("Missing auth token. Please resgister or login");
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET) as JwtPayload;

    if (!decoded) throw new Error("Invalid or tempered token");

    req.userId = decoded.userId;

    next();
  } catch (error) {
    throw new Error("Invalid or missing token");
  }
};
