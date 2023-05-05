const { Schema, model } = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  produce: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produce'
  }]
});

module.exports = mongoose.model('Farmer', farmerSchema);