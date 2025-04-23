const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Car = sequelize.define(
  "Car",
  {
    model_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dealership_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "cars",
    timestamps: false,
  }
);

module.exports = Car;
