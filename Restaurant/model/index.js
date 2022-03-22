var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

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


/**
 * Restaurant Schema
 */
var RestaurantSchema = new Schema({
  name: {
    type: String,
    required: [true, "Restaurant name not provided "],
  },
  address: {
    type: String,
    unique: [true, "Address already exists in database!"],
    lowercase: true,
    trim: true,
    required: [true, "Address not provided"]

  },
  phone: {
    type: String,
    required: [true, "Please add a phone number"]
  },
  image: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: String,
    required: true,
    unique: true
  },
  menu:{
    type: [MenuSchema]
  }
});

module.exports = mongoose.model('restaurant', RestaurantSchema);