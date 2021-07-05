const mongoose = require('mongoose');

const Question = mongoose.model('Question', {
  title: {
    type: String,

  },
  points: {
    type: Number,

  },
  answer: {
    type: String
  },
  answered: {
    type: Boolean
  },
  
});

module.exports = Question;
