const PostModel = require("../models/Post.js");
const fileService = require("./ImageService.js");

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    return await PostModel.create({ ...post, picture: fileName });
  }

  async getAll() {
    return PostModel.find();
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID can't be null");
    }
    return PostModel.findById(id);
  }

  async update(post) {
    if (!post._id) {
      throw new Error("ID can't be null");
    }
    return PostModel.findByIdAndUpdate(post._id, post, {
      new: true,
    });
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID can't be null");
    }
    return PostModel.findByIdAndDelete(id);
  }
}

module.exports = new PostService();
