const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Country
let Country = new Schema({

  id: {
    type: String
  },
  countryName: {
    type: String
  },
  countryCurrency: {
    type: String
  }
},{
    collection: 'country'
});

module.exports = mongoose.model('Country', Country);