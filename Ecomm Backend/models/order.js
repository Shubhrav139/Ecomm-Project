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
        amount: { type: Number }
    },
    {
        timestamps: true
    }
)

const orderModel = mongoose.model("orders", OrderSchema);

module.exports = orderModel;