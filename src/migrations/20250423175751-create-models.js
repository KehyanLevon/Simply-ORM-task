module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("models", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      make_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "makes",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("models");
  },
};
