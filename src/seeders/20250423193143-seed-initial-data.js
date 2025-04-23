module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("dealerships", [
      {
        name: "AutoWorld",
        address: "123 Main St",
        description: "Best cars in town",
        deleted_at: null,
      },
      {
        name: "SpeedMotors",
        address: "456 Highway Ave",
        description: "Luxury selection",
        deleted_at: null,
      },
    ]);

    await queryInterface.bulkInsert("users", [
      { username: "alice", email: "alice@example.com" },
      { username: "bob", email: "bob@example.com" },
    ]);

    await queryInterface.bulkInsert("makes", [
      { name: "Toyota" },
      { name: "BMW" },
    ]);

    await queryInterface.bulkInsert("models", [
      { name: "Corolla", make_id: 1 },
      { name: "X5", make_id: 2 },
    ]);

    await queryInterface.bulkInsert("cars", [
      { model_id: 1, dealership_id: 1 },
      { model_id: 2, dealership_id: 1 },
      { model_id: 2, dealership_id: 2 },
    ]);

    await queryInterface.bulkInsert("features", [
      { name: "Sunroof" },
      { name: "GPS" },
      { name: "Leather Seats" },
    ]);

    await queryInterface.bulkInsert("car_features", [
      { car_id: 1, feature_id: 1 },
      { car_id: 1, feature_id: 2 },
      { car_id: 2, feature_id: 2 },
      { car_id: 2, feature_id: 3 },
    ]);

    await queryInterface.bulkInsert("dealership_user", [
      { dealership_id: 1, user_id: 1 },
      { dealership_id: 1, user_id: 2 },
      { dealership_id: 2, user_id: 2 },
    ]);

    await queryInterface.bulkInsert("ratings", [
      { car_id: 1, user_id: 1, rate: 5 },
      { car_id: 1, user_id: 2, rate: 4 },
      { car_id: 2, user_id: 1, rate: 3 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ratings", null, {});
    await queryInterface.bulkDelete("car_features", null, {});
    await queryInterface.bulkDelete("features", null, {});
    await queryInterface.bulkDelete("cars", null, {});
    await queryInterface.bulkDelete("models", null, {});
    await queryInterface.bulkDelete("makes", null, {});
    await queryInterface.bulkDelete("dealership_user", null, {});
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("dealerships", null, {});
  },
};
