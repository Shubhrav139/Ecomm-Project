const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dbconnect = require("./dbconnect");
const userRoutes = require("./routers/userRoutes");
const productRoutes = require("./routers/productRoutes");
const orderRoutes = require("./routers/orderRoutes");
const couponRoutes = require("./routers/couponRoutes");
const PORT = 8080;

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

// Database connection
dbconnect()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", couponRoutes);

app.listen(PORT, () => {
  console.log("Connected to localhost:" + PORT);
});
