import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config/app.config";
import UserModel from "../models/user.model";

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

    req.user = decoded.userId;

    next();
  } catch (error) {
    throw new Error("Invalid or missing token");
  }
};
export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const token = req.cookies.token;

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET) as JwtPayload;

    if (!decoded) throw new Error("Invalid or tempered token");

    req.user = decoded.user;

  } catch (error) {
    throw new Error("Invalid or missing token");
  }


  if(req.user?.role !== 'ADMIN'){
    throw new Error('You do not have permission to access this route')
  }
  next()  
};
