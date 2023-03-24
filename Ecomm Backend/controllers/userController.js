const service = require("../services/userService");


function addUser(req, res) {
  service
    .addUser(req.body)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
}

function getAllUser(req, res) {
  service
    .getAllUser()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
}
function login(req, res) {
  service
    .login(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
}

module.exports = { addUser, getAllUser, login };
