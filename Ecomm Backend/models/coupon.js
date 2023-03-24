const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema(
    {
        coupon_code: { type: String },
        discount: { type: Number }
    }
)

const couponModel = mongoose.model("coupons", CouponSchema);

module.exports = couponModel;