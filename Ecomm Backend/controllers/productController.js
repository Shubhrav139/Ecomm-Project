const service = require("../services/productService")

function addProduct(req, res) {
    service
        .addProduct(req.body)
        .then((result) => {
            res.status(201).send(result);
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}

function updateProduct(req, res) {
    const productId = req.params.product_id;
    service
        .updateProduct(productId, req.body)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}

function deleteProduct(req, res) {
    const productId = req.params.product_id;
    service
        .deleteProduct(productId)
        .then(() => {
            res.status(200).send({ message: "deleted successfully" });
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}

function getAllProduct(req, res) {
    service
        .getAllProduct()
        .then((result) => {
            res.status(200).send({ result });
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}


module.exports = { addProduct, updateProduct, deleteProduct, getAllProduct };