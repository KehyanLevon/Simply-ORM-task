const { User, Car, Rating } = require("../models");
class RatingService {
  async rateCar({ car_id, user_id, rate }) {
    const car = await Car.findByPk(car_id);
    const user = await User.findByPk(user_id);
    if (!car || !user) throw new Error("Car or user not found");
    if (rate < 0 || rate > 5) throw new Error("Rate must be between 0 and 5");

    const rating = await Rating.create({ car_id, user_id, rate });
    return rating;
  }
}

module.exports = new RatingService();
