const {
  Dealership,
  User,
  Car,
  Feature,
  Rating,
  Model,
  Make,
} = require("../models");

class DealershipService {
  async createDealership(data) {
    return await Dealership.create(data);
  }

  async assignUserToDealership(dealershipId, userId) {
    const dealership = await Dealership.findByPk(dealershipId, {
      include: [{ model: User, as: "users" }],
    });

    const user = await User.findByPk(userId);

    if (!dealership || !user) {
      throw new Error("Dealership or User not found");
    }

    const users = await dealership.getUsers({ where: { id: user.id } });
    if (users.length === 0) {
      await dealership.addUser(user);
    }

    return { message: "User assigned sucessfully" };
  }

  async getAllSortedByCarCount() {
    const dealerships = await Dealership.findAll({
      attributes: {
        include: [
          [Car.sequelize.fn("COUNT", Car.sequelize.col("cars.id")), "carCount"],
        ],
      },
      include: [
        {
          model: Car,
          attributes: [],
        },
      ],
      group: ["Dealership.id"],
      order: [[Car.sequelize.literal("carCount"), "DESC"]],
    });

    return dealerships;
  }

  async getDealershipDetails(id) {
    const dealership = await Dealership.findByPk(id, {
      attributes: ["id", "name", "address", "description"],
      include: [
        {
          model: User,
          as: "users",
          attributes: ["id", "username", "email"],
          through: { attributes: [] },
        },
        {
          model: Car,
          include: [
            {
              model: Model,
              attributes: ["name"],
              include: {
                model: Make,
                attributes: ["name"],
              },
            },
            {
              model: Feature,
              attributes: ["name"],
              through: { attributes: [] },
            },
            {
              model: Rating,
              attributes: ["rate"],
              include: {
                model: User,
                attributes: ["username"],
              },
            },
          ],
        },
      ],
    });

    if (!dealership) {
      throw new Error("Dealership not found");
    }

    const data = dealership.toJSON();

    data.cars = (data.cars || []).map((car) => {
      const ratings = car.Ratings || [];
      const avg =
        ratings.length > 0
          ? ratings.reduce((sum, r) => sum + r.rate, 0) / ratings.length
          : null;

      return {
        ...car,
        averageRating: avg,
        ratings: ratings.map((r) => ({
          rate: r.rate,
          username: r.User?.username || "Unknown",
        })),
      };
    });

    return data;
  }
}

module.exports = new DealershipService();
