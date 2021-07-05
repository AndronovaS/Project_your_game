const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
  name: {
    type: String,
    required: true,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Question',
  }],

});


module.exports = Category;
