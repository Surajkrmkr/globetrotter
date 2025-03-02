import mongoose from "mongoose";
import { seedDatabase } from "../../script/seed_destination";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI ?? "", {});
    console.log("MongoDB connected...");
    seedDatabase();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export { connectDB };
