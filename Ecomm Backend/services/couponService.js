const couponModel = require("../models/coupon");

async function addCoupon(data) {
    try {
        const coupon = new couponModel(data);
        const res = await coupon.save();
        return { id: res._id }
    } catch (error) {
        throw error;
    }
}

async function getCoupon(code) {
    try {
        const coupon = await couponModel.findOne({ coupon_code: code });
        return coupon;
    } catch (error) {
        throw error;
    }
}

async function getAllCoupons() {
    try {
        const coupons = await couponModel.find();
        return coupons;
    } catch (error) {
        throw error;
    }
}

module.exports = { addCoupon, getCoupon, getAllCoupons };