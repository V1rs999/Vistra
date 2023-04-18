const Router = require("express");
const authrouter = new Router();
const authConroller = require("../Controllers/authConroller.js");

authrouter.post("/registration", authConroller.registration);
authrouter.post("login", authConroller.login);
authrouter.get("/users", authConroller.getUsers);

module.exports = authrouter;
