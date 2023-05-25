const UserModel = require("../models/User.js");
const PostModel = require("../models/Post");

class authService {
  async update(post) {
    if (!post._id) {
      throw new Error("ID can't be null");
    }
    return UserModel.findByIdAndUpdate(post._id, post, {
      new: true
    });
  }
}

module.exports = new authService();