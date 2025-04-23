const RatingService = require("../services/rating.service");

class RatingController {
  async rateCar(req, res) {
    try {
      const rating = await RatingService.rateCar(req.body);
      res.status(201).json(rating);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new RatingController();
