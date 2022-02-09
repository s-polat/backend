import mongoose from 'mongoose'
const { model, Schema } = mongoose

const flightShema = new Schema({
  from: {
    required: true,
    type: String
  },
  destination: {
    required: true,
    type: String
  },
  departure: {
    required: true,
    type: String
  },
  status: {
    required: true,
    type: String
  }
})

const Flight = model('Flight', flightShema);

export default Flight