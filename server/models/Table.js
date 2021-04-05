const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const TableSchema = new Schema({
    Category: {
      type: String,
      required: true
    },
    Price: {
      type: String,
      required: true
    },
    Name: {
      type: String
    },
    Available: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = Table = mongoose.model('tables', TableSchema);