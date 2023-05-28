const UserModel = require("../models/User.js");
const PostModel = require("../models/Post");

class authService {
  async update(post) {
    if (!post._id) {
      throw new Error(`ID can't be null ${post._id}`);
    }
    return UserModel.findByIdAndUpdate(post._id, post, {
      new: true
    });
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID can't be null");
    }
    return UserModel.findById(id);
  }
}

module.exports = new authService();