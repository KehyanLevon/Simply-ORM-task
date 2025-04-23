const express = require("express");

const dealershipRouter = require("./routers/dealership.router.js");
const ratingRouter = require("./routers/rating.router");
const carRouter = require("./routers/car.router");

const app = express();

app.use(express.json());

app.use("/api/dealerships", dealershipRouter);
app.use("/api/rating", ratingRouter);
app.use("/api/cars", carRouter);

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
