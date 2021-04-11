const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Supplier
let Supplier = new Schema({

  id: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  country: {
    type: String
  },
  companyName: {
    type: String
  }
},{
    collection: 'supplier'
});

module.exports = mongoose.model('Supplier', Supplier);