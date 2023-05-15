const {Schema, model } = require('mongoose');

const produceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: false
  },
  photo: {
    type: String
  },
  farmer: {
    type: Schema.Types.ObjectId,
    ref: 'Farmer'
  }
});

const Produce = model('Produce', produceSchema);

module.exports = Produce;