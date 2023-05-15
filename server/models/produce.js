const mongoose = require('mongoose');

const produceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  photo: {
    type: String  
  },
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer'
  }
});

module.exports = mongoose.model('Produce', produceSchema)