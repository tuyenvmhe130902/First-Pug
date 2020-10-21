var express = require("express");
var router = express.Router();
var controller = require("../controller/user.controller");
const UserValidate = require("../routers/user.validate");

router.get("/", controller.index);
router.get("/search", controller.search);
router.get("/create", controller.create);
router.get("/cookie", controller.cookie);
router.get("/:id", controller.get);
router.post("/create", UserValidate.createUser, controller.postCreate);

module.exports = router;
