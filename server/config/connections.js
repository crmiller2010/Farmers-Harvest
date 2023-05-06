const mongoose = require('mongoose');

const connectDB = async () =>{
const conn = await mongoose.connect('mongodb://localhost:27017/mygroceryDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true

});
  console.log('MongoDB Connected');
};

module.exports = connectDB;
