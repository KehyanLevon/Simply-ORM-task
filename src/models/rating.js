const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Rating = sequelize.define(
  "Rating",
  {
    car_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rate: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
  },
  {
    tableName: "ratings",
    timestamps: false,
  }
);

module.exports = Rating;
