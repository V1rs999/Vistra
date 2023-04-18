// підключення БД
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/router.js");
const authRouter = require("./routers/authRouter.js");
const fileupload = require("express-fileupload");
const path = require("path");

const Port = 5000;
const DB_URL =
  "mongodb+srv://AnotherUser:rRxKWXdGNwr3pbzC@vistra.vmi0ogl.mongodb.net/test";

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(fileupload({}));
app.use("/api", router);
app.use("/auth", authRouter);

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/home.html"));
});

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "..", "public", "html/eror.html"));
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
