const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'a tour must have a name.'],
      unique: true,
      trim: true,
      maxlength: [40, 'A tour name must have less or equal then 40 characters'],
      minlength: [10, 'A tour name must have more or equal then 10 characters']
      // validate: [validator.isAlpha, 'Tour names must only contain characters.']
    },
    slug: String,
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
      required: [true, 'a tour must have a difficulty.'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message:
          'a tour must be either easy, medium or difficult, no other qualification is allowed.'
      }
    },
    ratingsAverage: {
      type: Number,
      default: 0,
      min: [1, 'a tour must have at least one star as average.'],
      max: [1, 'a tour cannot have more than 5 stars as average.']
    },
    ratingsQuantity: {
      type: Number,
      default: 4.5
    },
    price: {
      type: Number,
      required: [true, 'a tour must have a price.']
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function(val) {
          //THIS DOESNT WORK WITH UPDATE
          return val < this.price;
        },
        message:
          'the price discount of ({VALLUE}) must be higher than the price itself.'
      }
    },
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
    startDates: [Date]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

tourSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7;
});

//document middleware, DOES NOT WORK FOR UPDATE
tourSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

//before saving

// tourSchema.pre('save', function(next) {
//   console.log('Doc will be saved...');
//   next();
// });

//after saving

// tourSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

//AGGREGATION MIDDLEWARE
tourSchema.pre('aggregate', function(next) {
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
