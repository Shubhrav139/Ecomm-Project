const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    category: { type: String },
    image: { type: String },
  }
)

const productModel = mongoose.model("products", ProductSchema);

module.exports = productModel;