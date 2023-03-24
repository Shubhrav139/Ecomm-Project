const service = require("../services/couponService")

function addCoupon(req, res) {
    service
        .addCoupon(req.body)
        .then((result) => {
            res.status(201).send(result);
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}

function getCoupon(req, res) {
    service
        .getCoupon(req.params.coupon_code)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}

function getAllCoupons(req, res) {
    service
        .getAllCoupons()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}


module.exports = { addCoupon, getCoupon, getAllCoupons };