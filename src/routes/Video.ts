import { Schema, model } from 'mongoose'

const VideoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    description: {
      type: String,
      required: false,
      trim: true,
      minlength: 10,
      maxlength: 255,
    },
    url: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timeStamp: true,
    versionKey: false,
  }
)

export default model('Video', VideoSchema)
