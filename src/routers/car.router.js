const express = require("express");
const CarController = require("../controllers/car.controller");

const router = express.Router();

router.post("/:id/features", CarController.addFeature);
router.delete("/:id/features/:featureId", CarController.removeFeature);
router.post("/dealerships/:id/cars", CarController.addCarToDealership);

module.exports = router;
