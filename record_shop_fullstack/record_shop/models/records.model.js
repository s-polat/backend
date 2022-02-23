import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
  recordId: mongoose.Types.ObjectId,
  userId:  mongoose.Types.ObjectId,
  quantity: Number,
});

const Order = mongoose.model('Order', orderSchema);

export default Order;