const express = require("express");
const controller = require("../controllers/productController");
const router = express.Router();

router.route("/product").post((req, res) => {
    controller.addProduct(req, res);
})

router.route("/product/:product_id").patch((req, res) => {
    controller.updateProduct(req, res);
})

router.route("/product/:product_id").delete((req, res) => {
    controller.deleteProduct(req, res);
})

router.route("/all-product").get((req, res) => {
    controller.getAllProduct(req, res);
})


module.exports = router;