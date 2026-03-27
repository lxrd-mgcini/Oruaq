import { Router } from "express";
import {
  forgotPasswordController,
  loginUserController,
  logOutUserController,
  registerUserController,
  resetPasswordController,
  signupUserController,
  verifyEmailController,
} from "../controllers/auth.controller";

export const authRoutes = Router();

authRoutes.post(`/auth/register`, registerUserController);
authRoutes.post(`/auth/login`, loginUserController);
authRoutes.post(`/auth/signup`, signupUserController);
authRoutes.post(`/auth/logout`, logOutUserController);
authRoutes.post(`/auth/forgot-password`, forgotPasswordController);
authRoutes.post(`/auth/reset-password/:resetToken`, resetPasswordController);
authRoutes.post(`/auth/verify-email`, verifyEmailController);
