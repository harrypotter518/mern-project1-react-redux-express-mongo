const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for CommoType
let CommoType = new Schema({

  id: {
    type: String
  },
  coType: {
    type: String
  }

},{
    collection: 'commoType'
});

module.exports = mongoose.model('CommoType', CommoType);