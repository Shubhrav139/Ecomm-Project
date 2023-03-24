const express = require("express");
const controller = require("../controllers/userController");
const router = express.Router();

router.route("/signup").post((req, res) => {
  controller.addUser(req, res);
});

router.route("/all-user").get((req, res) => {
  controller.getAllUser(req, res);
});

router.route("/login").post((req, res) => {
  controller.login(req, res);
});

module.exports = router;
