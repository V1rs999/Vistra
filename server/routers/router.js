const Router = require("express");
const router = new Router();
const PostConroller = require("../Controllers/PostController.js");
const { check } = require("express-validator");
const roleMiddleware = require("../middleware/roleMiddleware.js");
router.post(
  "/posts", roleMiddleware(["USER"]),
  [
    check("rate")
      .notEmpty()
      .isFloat({ min: 0, max: 10 })
      .withMessage("The value must be between 0 and 10")
  ],
  PostConroller.create
);
router.get("/posts", roleMiddleware(["USER"]), PostConroller.getAll);
router.get("/posts/:id", roleMiddleware(["USER"]), PostConroller.getOne);
router.put("/posts", roleMiddleware(["USER"]), PostConroller.update);
router.delete("/posts/:id", roleMiddleware(["USER"]), PostConroller.delete);
module.exports = router;
