const DealershipService = require("../services/dealership.service.js");

class DealershipController {
  async createDealership(req, res) {
    try {
      const dealership = await DealershipService.createDealership(req.body);
      res.status(201).json(dealership);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async assignUser(req, res) {
    try {
      const dealershipId = req.params.id;
      const { userId } = req.body;
      await DealershipService.assignUserToDealership(dealershipId, userId);
      res.status(200).json({ message: "User assigned successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllSorted(req, res) {
    try {
      const dealerships = await DealershipService.getAllSortedByCarCount();
      res.json(dealerships);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getDealershipById(req, res) {
    try {
      const data = await DealershipService.getDealershipDetails(req.params.id);
      res.json(data);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = new DealershipController();
