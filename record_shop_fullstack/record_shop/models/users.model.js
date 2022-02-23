import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName:  String,
  lastName: String,
  email:   String,
  password: String,
});

const Record = mongoose.model('User', userSchema);

export default Record;
