const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Make = sequelize.define(
  "Make",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "makes",
    timestamps: false,
  }
);

module.exports = Make;
