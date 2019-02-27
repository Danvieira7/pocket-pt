const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
var infoSchema = new Schema({
    age: {
      type: Number, 
      required: true
    },
    height: {
      type: Number, 
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      enum: ['female', 'male'],
      required: true
    },
    goal: {
      type: String,
      enum: ['weight loss', 'maintenance', 'muscle gain'],
      required: true
    },
    exp: {
      type: String,
      enum: ['beginner', 'intermediate'],
      required: true
    }
  });

var userSchema = new Schema(
  {
    name: String,
    info: infoSchema,
    email: String,
    image: String,
    googleId: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema)


