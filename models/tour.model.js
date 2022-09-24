const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const validator = require('validator');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: {
        value: true,
        message: 'Tour name must be provided',
      },
      trim: true,
      unique: true,
      lowercase: true,
      minLength: [3, 'Please provide at least 3 char!'],
      maxLength: [100, 'Name should be max of 100 char'],
    },
    place: {
      type: String,
      required: {
        value: true,
        message: 'Tour Destination required!',
      },
      trim: true,
      maxLength: [100, 'place name should be max of 100 char'],
    },

    imgURL: {
      type: String,
      validate: [validator.isURL, 'Please provide a valid img URL!'],
    },
    description: {
      type: String,
      required: {
        value: true,
        message: 'Please provide description',
      },
    },
    cost: {
      type: Number,
      required: {
        value: true,
        message: 'tour cost not provided',
      },
      min: [0, "tour cost can't be negative"],
    },
    costCurrency: {
      type: String,
      required: {
        value: true,
        message: 'Please provide cost currency',
      },
      enum: {
        values: ['Taka', 'Dollar', 'Euro', 'Rupi'],
        message:
          '{VALUE} is not accepted currency. Please select Taka/Dollar/Euro/Rupi',
      },
    },
  },
  { timestamps: true }
);

const TourModel = mongoose.model('Tour', tourSchema);
module.exports = TourModel;
