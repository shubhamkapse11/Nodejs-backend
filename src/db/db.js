import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {console.log("🔍 Final URI =", `${process.env.MONGO_URI}/${DB_NAME}`);

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    console.log(
      `\n🟢 MongoDB Connected: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
