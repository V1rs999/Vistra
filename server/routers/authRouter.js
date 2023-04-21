const Router = require("express");
const authrouter = new Router();
const authConroller = require("../Controllers/authController.js");
const { check } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware.js");
const roleMiddleware = require("../middleware/roleMiddleware.js");
authrouter.post(
  "/registration",
  [
    check("username", "can't be emty").notEmpty(),
    check("password", "length shoud be between 4 and 10 char").isLength({
      min: 4,
      max: 10,
    }),
  ],
  authConroller.registration
);
authrouter.post("/Login", authConroller.login);
authrouter.get("/users", roleMiddleware(["ADMIN"]), authConroller.getUsers);

module.exports = authrouter;
