const { Schema, model} = require('mongoose');

const farmerSchema = new Schema({
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
  email: {
    type:String,
    required: true
  },
  produce: [{
    type: Schema.Types.ObjectId,
    ref: 'Produce'
  }]
});

const Farmer = model('Farmer', farmerSchema);

module.exports = Farmer;