import { config } from "../config/app.config";
import { Resend } from "resend";
import { mailConfig } from "../config/mail.config";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./templates/auth";
import { MailerParams } from "../@types";

const resend = new Resend(config.RESEND_API_KEY);

// Create general function to send an email.Then create wrapper functions that use the general function to send specific email e.g verificationEmail function uses sendEmail under the hood

export const sendVerificationEmail = async (
  recipient: string,
  verificationCode: string
) => {
  sendEmail({
    to: [recipient],
    from: mailConfig.NO_REPLY_EMAIL_ADDRESS,
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationCode
    ),
    subject: "Verify your email",
  });
};

export const sendWelcomeEmail = async (recipient: string) => {
  sendEmail({
    to: [recipient],
    from: mailConfig.NO_REPLY_EMAIL_ADDRESS,
    html: WELCOME_EMAIL_TEMPLATE,
    subject: "Verify your email",
  });
};

export const sendPasswordResetEmail = async (
  recipient: string,
  resetURL: string
) => {
  sendEmail({
    to: [recipient],
    from: mailConfig.NO_REPLY_EMAIL_ADDRESS,
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    subject: "Reset your password",
  });
};

export const sendResetSuccessEmail = (recipient: string) => {
  sendEmail({
    to: [recipient],
    from: mailConfig.NO_REPLY_EMAIL_ADDRESS,
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    subject: "Password reset successful",
  });
};

// Generic sendEmailFunction
const sendEmail = async ({
  to,
  from,
  subject,
  //   text,
  html,
}: MailerParams) =>
  await resend.emails.send({
    from,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
  });
