const UserModel = require("../models/User.js");
require("../models/Post");

class authService {
  async update(post) {
    if (!post._id) {
      throw new Error(`ID can't be null ${post._id}`);
    }
    return UserModel.findByIdAndUpdate(post._id, post, {
      new: true
    });
  }
}

module.exports = new authService();