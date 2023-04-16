// підключення БД
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/router.js");
const fileupload = require("express-fileupload");
const path = require("path");

const Port = 5000;

const DB_URL =
  "mongodb+srv://Virus999:CDNcTSDSM967BX7C@vistra.vmi0ogl.mongodb.net/test";

const app = express();

app.use(express.json());
app.use(express.static(path.join("../img")));
app.use(fileupload({}));
app.use("/api", router);

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
