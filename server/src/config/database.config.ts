import mongoose from "mongoose";

export async function connectToDatabase(URL: string) {
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Failed to connect to database");
    process.exit(1);
  }
}
