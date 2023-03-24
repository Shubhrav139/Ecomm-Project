const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        products: [{
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
            },
            quantity: { type: Number }
        }],
        coupon_code: { type: String },
        amount: { type: Number }
    },
    {
        timestamps: true
    }
)

const orderModel = mongoose.model("orders", OrderSchema);

module.exports = orderModel;