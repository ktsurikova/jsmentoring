const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let newsSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  text: {type: String, required: true},
  date: {type: Date, required: true}
});

module.exports = mongoose.model('News', newsSchema);
