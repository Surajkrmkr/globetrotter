import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  correctAnswers: { type: Number, default: 0 },
  incorrectAnswers: { type: Number, default: 0 },
});

const User = mongoose.model("User", userSchema);

const userScoreSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  score: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const UserScore = mongoose.model("UserScore", userScoreSchema);

export { User, UserScore };
