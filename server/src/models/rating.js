import { Schema, model } from "mongoose";

const RatingSchema = new Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    pin: {
      type: String,
      required: true,
    },
    numTaken: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("RatingSchema", RatingSchema);
