module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cars", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      model_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dealership_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cars");
  },
};
