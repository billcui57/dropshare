import { Schema, model } from 'mongoose'

const RatingSchema = new Schema({
  user: {
    type: String, required: true
  },
  comment: {
    type: String, required: false,
  },
  isUpVote: {
    type: Boolean, required: true
  }
}, { timestamps: true })

export default model('RatingSchema', RatingSchema)