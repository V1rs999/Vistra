// підключення БД
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routers/router.js");
const authRouter = require("./routers/authRouter.js");
const fileupload = require("express-fileupload");
const path = require("path");
const roleMiddleware = require("../server/middleware/roleMiddleware");

const Port = 5000;
const DB_URL =
  "mongodb+srv://AnotherUser:rRxKWXdGNwr3pbzC@vistra.vmi0ogl.mongodb.net/test";

const app = express();
app.use(express.json());
app.use(express.static(path.join("../Vistra/public/img")));
app.use(express.static("public"));
app.use(fileupload({}));
app.use("/api", router);
app.use("/auth", authRouter);

app.get("/home", roleMiddleware(["USER"]), (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/home.html"));
});
app.get("/TvShow", roleMiddleware(["USER"]), (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/TvShow.html"));
});
app.get("/movie", roleMiddleware(["USER"]), (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/movie.html"));
});
app.get("/Login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/Login.html"));
});
app.get("/Register", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/Register.html"));
});
app.get("/MyList", roleMiddleware(["USER"]), (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/MyList.html"));
});
app.get("/player", roleMiddleware(["USER"]), (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/player.html"));
});
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/index.html"));
});
app.get("/MyFriends", roleMiddleware(["USER"]), (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/MyFriends.html"));
});

app.get("/MyFriends", roleMiddleware(["USER"]), (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/MyFriends.html"));
});

app.get("/helpSupport", roleMiddleware(["USER"]), (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html/helpSupport.html"));
});

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "..", "public", "html/error.html"));
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    app.listen(Port, () => console.log(`ServerStart on Port${Port}`));
  } catch (e) {
    console.log(e);
  }
}

startApp().then(r => {
});
