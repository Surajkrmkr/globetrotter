import mongoose from "mongoose";

const inviteSchema = new mongoose.Schema({
  inviteCode: { type: String, unique: true, required: true },
  inviter: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Invite = mongoose.model("Invite", inviteSchema);
export default Invite;
