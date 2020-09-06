import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: String,
  content: String,
  timestamp: String,
  received: Boolean,
})

export default mongoose.model('Message', schema)