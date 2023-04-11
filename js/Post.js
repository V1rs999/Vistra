const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  author: { type: String, require: true },
  tittle: { type: String, require: true },
  content: { type: String, require: true },
  picture: { type: String },
});

const PostModel = mongoose.model("Post", Post);
module.exports = PostModel;
