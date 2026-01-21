import { UserType } from "../@types";
import { config } from "../config/app.config";

import { randomBytes } from "node:crypto";

import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../mailers/mailer";

import UserModel from "../models/user.model";
import { generateJWT } from "../utils/jwt";
import { generateVerificationCode } from "../utils/uuid";
import bcrypt from "bcryptjs";

export const registerUserService = async (data: UserType) => {
  const { email, username, password } = data;

  const userExists = await UserModel.findOne({ email: email });
  if (userExists) {
    throw new Error("User with this email already exists");
  }

  const verificationCode = generateVerificationCode();
  const verificationCodeExpiryDate = Date.now() + 2 * 60 * 60 * 1000;

  const hashedPassword = await bcrypt.hash(password, config.AUTH_SALT);

  const user = new UserModel({
    email: email,
    username: username,
    password: hashedPassword,
    verificationCode: verificationCode,
    verificationCodeExpiryDate: verificationCodeExpiryDate,
  });

  await user.save();

  const token = generateJWT(user.id);

  await sendVerificationEmail(user.email, user.verificationCode);

  return { user, token };
};

export const loginUserService = async (data: {
  email: string;
  password: string;
}) => {
  const { email, password } = data;

  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const token = generateJWT(user.id);

  return { user, token };
};

// TO-DO : use updateOne function to search and update the record as one query
export const verifyUserService = async (verificationCode: string) => {
  const user = await UserModel.findOne({
    verificationCode: verificationCode,
    verificationCodeExpiryDate: { $gt: Date.now() },
  });

  if (!user) {
    throw new Error("Invalid or expired verification code");
  }

  user.set("verified", true);
  user.set("verificationCode", undefined);
  user.set("verificationCodeExpiryDate", undefined);

  await user.save();
  await sendWelcomeEmail(user.email);

  return user;
};

export const forgotPasswordService = async (email: string) => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const resetToken = randomBytes(20).toString("hex");
  const resetPasswordExpiryDate = Date.now() + 1 * 60 * 60 * 1000;

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpiryDate = resetPasswordExpiryDate;

  await user.save();

  await sendPasswordResetEmail(
    user.email,
    `${config.CLIENT_URL}/reset-password/${resetToken}`
  );

  return resetToken;
};

export const resetPasswordService = async (
  resetToken: string,
  password: string
) => {
  const user = await UserModel.findOne({
    resetPasswordToken: resetToken,
    resetPasswordExpiryDate: { $gt: Date.now() },
  });

  if (!user) {
    throw new Error("User not found or expired reset token");
  }

  user.password = await bcrypt.hash(password, config.AUTH_SALT);
  user.set("resetPasswordExpiryDate", undefined);
  user.set("resetPasswordToken", undefined);

  await sendResetSuccessEmail(user.email);

  return user;
};
