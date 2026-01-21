import { z } from "zod";

const usernameSchema = z.string().min(3).max(256).trim();
const emailSchema = z.string().email().trim();
const passwordSchema = z.string().min(8).max(256).trim();

export const userLoginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
export const userRegistrationSchema = z.object({
  email: emailSchema,
  username: usernameSchema,
  password: passwordSchema,
});

export const verificationCodeSchema = z.object({
  verificationCode: z.string().length(6).trim(),
});

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const resetPasswordSchema = z.object({
  password: passwordSchema,
});

export const resetTokenSchema = z.string().max(40).trim();
