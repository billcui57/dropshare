import mongoose, { Schema } from "mongoose";

import { CATEGORIES } from "@/constants/pin";

const PinSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    remainingCount: {
      type: Number,
      required: false,
    },
    category: {
      type: String,
      enum: [...CATEGORIES],
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    image: {
      type: String, //base 64
      required: false,
    },
    ratings: [
      {
        type: Schema.Types.ObjectId,
        ref: "RatingSchema",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("PinSchema", PinSchema);
