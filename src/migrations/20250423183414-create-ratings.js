module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ratings", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cars",
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
      rate: {
        type: Sequelize.TINYINT,
        allowNull: false,
        validate: {
          min: 0,
          max: 5,
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ratings");
  },
};
