const mongoose = require('mongoose');
const sensors = mongoose.Schema({
  guid: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('sensors', sensors);
