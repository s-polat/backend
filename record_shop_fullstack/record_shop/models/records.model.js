import mongoose from 'mongoose';
const { Schema } = mongoose;

const recordSchema = new Schema({
  title:  String,
  artist: String,
  year:   String,
  price: Number,
  cover: String,
});

const Record = mongoose.model('Record', recordSchema);

export default Record;