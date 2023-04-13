const PostModel = require("./Post.js");

class PostService {
  async create(post) {
    const createdPost = await PostModel.create(post);
    return createdPost;
  }
  async getAll() {
    const posts = await PostModel.find();
    return posts;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("ID can't be null");
    }
    const post = await PostModel.findById(id);
    return post;
  }
  async update(post) {
    if (!post._id) {
      throw new Error("ID can't be null");
    }
    const updatePost = await PostModel.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatePost;
  }
  async delete(id) {
    if (!id) {
      throw new Error("ID can't be null");
    }
    const post = await PostModel.findByIdAndDelete(id);
    return post;
  }
}
module.exports = new PostService();
