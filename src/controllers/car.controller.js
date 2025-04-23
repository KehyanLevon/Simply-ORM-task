const CarService = require("../services/car.service");

class CarController {
  async addFeature(req, res) {
    const { id: carId } = req.params;
    const { featureId } = req.body;

    try {
      const result = await CarService.addFeatureToCar(carId, featureId);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async removeFeature(req, res) {
    const { id: carId, featureId } = req.params;

    try {
      const result = await CarService.removeFeatureFromCar(carId, featureId);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async addCarToDealership(req, res) {
    const { id: dealershipId } = req.params;
    const { model_id } = req.body;

    try {
      const car = await CarService.addCarToDealership(dealershipId, model_id);
      res.status(201).json(car);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CarController();
