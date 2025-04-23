module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("dealership_user", {
      dealership_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "dealerships",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("dealership_user");
  },
};
