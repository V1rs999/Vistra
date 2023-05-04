const mongoose = require("mongoose");

const Movie = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  letter: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
});

const MovieModel = mongoose.model("Movie", Movie);
module.exports = MovieModel;
