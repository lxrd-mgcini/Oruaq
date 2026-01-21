export type UserType = {
  username: string;
  password: string;
  email: string;
};

export type MailerParams = {
  to: string[];
  subject: string;
  html: string;
  from: string;
};
