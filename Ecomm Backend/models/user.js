const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone_number: { type: String },
    role: { type: String },
    orders: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "orders",
    }],
  }
);

const userModel = mongoose.model("users", UserSchema);

module.exports = userModel;