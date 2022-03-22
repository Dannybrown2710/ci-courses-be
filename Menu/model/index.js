var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Restaurant Schema
 */
var MenuSchema = new Schema({
  name: {
    type: String,
    required: [true, "Item name not provided "],
  },
  category: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, "Category not provided"]

  },
  image: {
    type: String,
    required: [true, "Please add a phone number"]
  },
  price: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('menu', MenuSchema);