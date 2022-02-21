const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'a tour must have a name.'],
      unique: true,
      trim: true
    },
    duration: {
        type: Number,
        required: [true, 'a tour must have a duration.']
    },
    maxGroupSize: {
        type: Number,
        required: [true, 'a tour must have a maximum group size.']
    },
    difficulty: {
        type: String,
        required: [true, 'a tour must have a difficulty.']
    },
    ratingsAverage: {
      type: Number,
      default: 0,
  
    },
    ratingsQuantity: {
        type: Number,
        default: 4.5,
    
      },
    price: {
      type: Number, 
      required: [true, 'a tour must have a price.']
    },
    priceDiscount: Number,
    summary: {
        type: String,
        trim: true
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'a tour must have an image cover.']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      selected: false
    },
    startDate: [Date]
  })
  
  const Tour = mongoose.model('Tour', tourSchema)

  module.exports = Tour;