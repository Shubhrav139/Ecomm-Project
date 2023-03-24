const express = require("express");
const controller = require("../controllers/orderController");
const router = express.Router();

router.route("/order").post((req, res) => {
    controller.createOrder(req, res);
})

router.route("/order/:user_id").get((req, res) => {
    controller.getOrders(req, res);
})

module.exports = router;