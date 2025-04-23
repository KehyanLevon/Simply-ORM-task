const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Model = sequelize.define(
  "Model",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    make_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "models",
    timestamps: false,
  }
);

module.exports = Model;
