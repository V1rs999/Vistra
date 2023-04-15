const Router = require("express");
const router = new Router();
const PostConroller = require("./PostController.js");

router.post("/posts", PostConroller.create);
router.get("/posts", PostConroller.getAll);
router.get("/posts/:id", PostConroller.getOne);
router.put("/posts", PostConroller.update);
router.delete("/posts/:id", PostConroller.delete);

module.exports = router;
