module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("car_features", {
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cars",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      feature_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "features",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("car_features");
  },
};
