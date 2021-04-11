const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Mill
let Mill = new Schema({

  id: {
    type: String
  },
  millName: {
    type: String
  },
  location: {
    type: String
  },
  country: {
    type: String
  }
},{
    collection: 'mill'
});

module.exports = mongoose.model('Mill', Mill);