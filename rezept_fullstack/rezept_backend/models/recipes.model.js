const mongoose = require("mongoose")
const { model, Schema } = mongoose;

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
});

const Recipe = model('Recipe', recipesSchema);
module.exports = Recipe;