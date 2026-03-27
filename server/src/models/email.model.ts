import mongoose, { Document, Schema } from "mongoose";

export interface EmailDocument extends Document {
  email: string;
}

const emailSchema = new Schema<EmailDocument>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const EmailModel = mongoose.model<EmailDocument>("Emails", emailSchema);
export default EmailModel;
