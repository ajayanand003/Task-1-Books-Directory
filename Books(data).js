const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  pages: Number,
});

module.exports = mongoose.model('Book', bookSchema);