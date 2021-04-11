const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Commodity
let Commodity = new Schema({

  id: {
    type: String
  },
  coType: {
    type: String
  },
  coName: {
    type: String
  }
},{
    collection: 'commodity'
});

module.exports = mongoose.model('Commodity', Commodity);