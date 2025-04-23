const { Dealership, Model, Car, Feature } = require("../models");

class CarService {
  async addFeatureToCar(carId, featureId) {
    const car = await Car.findByPk(carId);
    const feature = await Feature.findByPk(featureId);
    if (!car || !feature) throw new Error("Car or Feature not found");

    await car.addFeature(feature);
    return { message: "Feature added successfully" };
  }

  async removeFeatureFromCar(carId, featureId) {
    const car = await Car.findByPk(carId);
    const feature = await Feature.findByPk(featureId);
    if (!car || !feature) throw new Error("Car or Feature not found");

    await car.removeFeature(feature);
    return { message: "Feature removed successfully" };
  }

  async addCarToDealership(dealershipId, modelId) {
    const dealership = await Dealership.findByPk(dealershipId);
    const model = await Model.findByPk(modelId);

    if (!dealership || !model) {
      throw new Error("Dealership or model not found");
    }

    const car = await Car.create({
      model_id: modelId,
      dealership_id: dealershipId,
    });

    return car;
  }
}

module.exports = new CarService();
