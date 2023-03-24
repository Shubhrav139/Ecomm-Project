const orderModel = require("../models/order");
const userModel = require("../models/user");

// Temporarily configured Object id of the only user.
const USER_ID = "6407482a4d3de67e450366b9";

async function createOrder(data) {
    try {
        const orderData = new orderModel(data);
        const res = await orderData.save();
        const user = await userModel.findById({ _id: USER_ID });
        user.orders.push(res._id);
        await user.save();
        return { id: res._id }
    } catch (error) {
        throw error;
    }
}

async function getOrders(userId) {
    try {
        const orderData = await userModel.find({ _id: userId }, { orders: 1 }).populate('orders');
        return orderData;
    } catch (error) {
        throw error;
    }
}

module.exports = { createOrder, getOrders };