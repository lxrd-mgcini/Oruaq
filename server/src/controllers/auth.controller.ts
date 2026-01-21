import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import {
  forgotPasswordSchema,
  resetPasswordSchema,
  resetTokenSchema,
  userLoginSchema,
  userRegistrationSchema,
  verificationCodeSchema,
} from "../validations/user.validation";
import {
  forgotPasswordService,
  loginUserService,
  registerUserService,
  resetPasswordService,
  verifyUserService,
} from "../services/auth.services";
import { HTTPSTATUS } from "../config/http.config";

export const registerUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const data = userRegistrationSchema.parse(req.body);

    const { user, token } = await registerUserService(data);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, //TO-DO: Take value from env file
      sameSite: "strict",
      maxAge: 14 * 24 * 60 * 60 * 1000,
    });

    res.status(HTTPSTATUS.CREATED).json({
      message: "User registered successfully",
      success: true,
      user: { ...user._doc, password: undefined },
    });
  }
);

export const loginUserController = asyncHandler(async (req, res) => {
  const data = userLoginSchema.parse(req.body);

  const { user, token } = await loginUserService(data);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false, //TO-DO: Take value from env file
    sameSite: "strict",
    maxAge: 14 * 24 * 60 * 60 * 1000,
  });

  res.status(HTTPSTATUS.CREATED).json({
    message: "User logged in successfully",
    success: true,
    user: { ...user._doc, password: undefined },
  });
});

export const verifyEmailController = asyncHandler(
  async (req: Request, res: Response) => {
    const { verificationCode } = verificationCodeSchema.parse(req.body);

    const user = await verifyUserService(verificationCode);
    res.status(HTTPSTATUS.CREATED).json({
      message: "User email verified successfully",
      success: true,
      user: { ...user._doc, password: undefined },
    });
  }
);

export const logOutUserController = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res
    .status(HTTPSTATUS.OK)
    .json({ message: "User successfully logged out", success: true });
});

export const forgotPasswordController = asyncHandler(async (req, res) => {
  // creates a reset-password token, puts it in a link and sends it in an email. Directly changing the password is in the reset password controller
  const { email } = forgotPasswordSchema.parse(req.body);

  const resetToken = await forgotPasswordService(email);

  res.status(HTTPSTATUS.CREATED).json({
    message: "Reset URL sent to user email",
    success: true,
    resetToken: resetToken,
  });
});

export const resetPasswordController = asyncHandler(async (req, res) => {
  const resetToken = resetTokenSchema.parse(req.params.resetToken);
  const { password } = resetPasswordSchema.parse(req.body);

  const user = await resetPasswordService(resetToken, password);

  res.status(HTTPSTATUS.CREATED).json({
    message: "User password reset successfully",
    success: true,
    user: { ...user._doc, password: undefined },
  });
});
