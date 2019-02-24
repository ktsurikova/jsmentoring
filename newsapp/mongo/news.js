const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let newsSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  description: {type: String, required: false},
  url: {type: String, required: true},
  urlToImage: {type: String, required: true},
  content: {type: String, required: true},
  source: {type: String, required: true},
  publishedAt: {type: Date, required: true}
});

module.exports = mongoose.model('News', newsSchema);
