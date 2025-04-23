const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Feature = sequelize.define(
  "Feature",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "features",
    timestamps: false,
  }
);

module.exports = Feature;
