import { Schema, model } from 'mongoose'
import { IRating } from '@/interfaces'

const RatingSchema = new Schema<IRating>({
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

export default model<IRating>('RatingSchema', RatingSchema)