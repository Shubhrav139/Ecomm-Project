const mongoose = require("mongoose");

//setting connection
const dbconnect = async function () {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Ecomm", {
      useNewUrlParser: true,
    });

    return Promise.resolve("DB connection established!");
  } catch (e) {
    return Promise.reject(new Error(e));
  }
};

//exporting connect promise
module.exports = dbconnect;
