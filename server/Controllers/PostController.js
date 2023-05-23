const PostService = require("../Services/PostService.js");
const { validationResult } = require("express-validator");

class PostConroller {
  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      console.log(req.files);
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatePost = await PostService.update(req.body);
      return res.json(updatePost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new PostConroller();
