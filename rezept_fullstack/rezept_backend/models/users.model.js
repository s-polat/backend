const mongoose = require("mongoose");
const Recipe = require("./recipes.model");
const { model, Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false, //select sayesinde password biz isteyene gizlenecek
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual('Recipes', {
    ref:'Recipe',
    localField:'_id',
    foreignField:'user'
});

const User =model('user', userSchema);
module.exports= User;
