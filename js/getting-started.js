const express = require("express");
const mongoose = require("mongoose");
const Post = require("./Post.js");

const Port = 5000;

const DB_URL =
"mongodb+srv://AnotherUser:rRxKWXdGNwr3pbzC@vistra.vmi0ogl.mongodb.net/test";

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  const { author, tittle, content, picture } = req.body;
  const post = await Post.create({ author, tittle, content, picture });
  res.json(post);
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
