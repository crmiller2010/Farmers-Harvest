const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/mygroceryDB', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true

});
  console.log('MongoDB Connected');

module.exports = mongoose.connection;
