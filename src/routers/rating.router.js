const express = require("express");
const RatingController = require("../controllers/rating.controller");

const router = express.Router();

router.post("/", RatingController.rateCar);

module.exports = router;
