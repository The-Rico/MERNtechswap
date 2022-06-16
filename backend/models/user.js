const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
      default: 'unemployed',
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('User', userSchema);
