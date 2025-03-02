import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  clues: [String],
  fun_fact: [String],
  trivia: [String],
});

const Destination = mongoose.model("Destination", destinationSchema);
export default Destination;
