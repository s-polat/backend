const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const User = require("./users.model");

const recipesSchema = new Schema({
  title: { require: true, type: String },
  image: {
    required: false,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  ingredients: {
    required: true,
    type: Object,
  },
  category: {
    required: true,
    type: Array,
  },
  preparationTime: {
    required: true,
    type: String,
  },
  rating: {
    required: true,
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Recipe = model("Recipe", recipesSchema);
module.exports = Recipe;
