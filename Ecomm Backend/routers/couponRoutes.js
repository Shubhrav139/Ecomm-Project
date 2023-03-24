const express = require("express");
const controller = require("../controllers/couponController");
const router = express.Router();

router.route("/coupon").post((req, res) => {
    controller.addCoupon(req, res);
})

router.route("/coupon/:coupon_code").get((req, res) => {
    controller.getCoupon(req, res);
})

router.route("/coupon").get((req, res) => {
    controller.getAllCoupons(req, res);
})

module.exports = router;