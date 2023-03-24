const productModel = require("../models/product");

async function addProduct(data) {
    try {
        const productData = new productModel(data);
        const res = await productData.save();
        return res;
    } catch (error) {
        throw error;
    }
}

async function updateProduct(productId, data) {
    try {
        const updatedProduct = await productModel.findByIdAndUpdate({ _id: productId }, { $set: data }, { new: true })
        return updatedProduct;
    } catch (error) {
        throw error;
    }
}

async function deleteProduct(productId) {
    try {
        await productModel.findByIdAndDelete({ _id: productId })
    } catch (error) {
        throw error;
    }
}

async function getAllProduct() {
    try {
        const allProducts = await productModel.find({}, { __v: 0 })
        return allProducts;
    } catch (error) {
        throw error;
    }
}

module.exports = { addProduct, updateProduct, deleteProduct, getAllProduct };