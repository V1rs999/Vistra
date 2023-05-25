const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secret } = require("../config");
const authService = require("../Services/authService.js");
const PostModel = require("../models/Post.js");

const generateAccessToken = (id, roles) => {
  const payload = { id, roles };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class authConroller {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Error registation", errors });
      }
      const { username, email, password, like } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "User with this username has in bd" });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
        username,
        email,
        password: hashPassword,
        roles: [userRole.value],
        like: Array.isArray(like) ? [...like] : []
      });
      await user.save();
      return res.json({ message: "Successful registration" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: `User ${email} not be found` });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: `Wrong password` });
      }
      const token = generateAccessToken(user._id, user.roles);
      return res.json({
        token,
        userId: { userId: user._id },
        user: { username: user.username }
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.log(e);
    }
  }

  async getMylist(req, res) {
    try {
      const userId = req.params.id; // Assuming the id of the authorized user is passed as a parameter
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const userLikes = user.like; // Retrieve the array of liked post ids from the user

      const posts = await PostModel.find({ _id: { $in: userLikes } }); // Fetch posts with matching ids in the user's likes array

      return res.json(posts);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Server error" });
    }
  }


  async updateMylist(req, res) {
    try {
      const updateMylist = await authService.update(req.body);
      return res.json(updateMylist);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

module.exports = new authConroller();
