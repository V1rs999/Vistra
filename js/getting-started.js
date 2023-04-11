const express = require("express");
const mongoose = require("mongoose");
const PostModel = require("./Post.js");

const Port = 5000;

const DB_URL =
  "mongodb+srv://Virus999:CDNcTSDSM967BX7C@vistra.vmi0ogl.mongodb.net/test";

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { author, title, content, picture } = req.body;
    const post = await PostModel.create({ author, title, content, picture });
    console.log(req.body);
    res.json(post);
  } catch (e) {
    res.status(500).json(e);
  }
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(Port, () => console.log(`ServerStart on Port${Port}`));
  } catch (e) {
    console.log(e);
  }
}
startApp();
// "mongodb+srv://Virus999:cwfJs8W3epcjpMIT@vistra.vmi0ogl.mongodb.net/test"
