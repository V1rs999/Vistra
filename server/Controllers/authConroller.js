const User = require("../models/Role");
const Role = require("../models/Role");
class authConroller {
  async registration(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration error" });
    }
  }
  async login(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Login error" });
    }
  }
  async getUsers(req, res) {
    try {
      res.json("server work");
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = new authConroller();
