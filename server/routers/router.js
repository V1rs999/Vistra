const Router = require("express");
const router = new Router();
const PostConroller = require("../Controllers/PostController.js");
const { check } = require("express-validator");

router.post(
  "/posts",
  [
    check("rate")
      .notEmpty()
      .isInt({ min: 0, max: 10 })
      .withMessage("The value must be between 0 and 10")
  ],
  PostConroller.create
);
router.get("/posts", PostConroller.getAll);
router.get("/posts/:id", PostConroller.getOne);
router.put("/posts", PostConroller.update);
// router.delete("/posts/:id", PostConroller.delete);
module.exports = router;
