const service = require("../services/orderService")

function createOrder(req, res) {
    service
        .createOrder(req.body)
        .then((result) => {
            res.status(201).send(result);
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}

function getOrders(req, res) {
    const userId = req.params.user_id;
    service
        .getOrders(userId)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(400).send({ message: err.message });
        });
}

module.exports = { createOrder, getOrders };