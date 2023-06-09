const { Schema, model } = require("mongoose");

const User = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  },
  roles: [
    {
      type: String,
      ref: "Role"
    }
  ],
  like: [
    {
      type: String
    }
  ]
});
module.exports = model("User", User);
