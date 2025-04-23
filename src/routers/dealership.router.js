const express = require("express");
const dealershipController = require("../controllers/dealership.controller.js");

const router = express.Router();

router.post("/", dealershipController.createDealership);
router.post("/:id/users", dealershipController.assignUser);
router.get("/", dealershipController.getAllSorted);
router.get("/:id", dealershipController.getDealershipById);

module.exports = router;
