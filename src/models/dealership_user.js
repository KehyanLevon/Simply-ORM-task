const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DealershipUser = sequelize.define(
  "dealership_user",
  {
    dealership_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "dealership_user",
    timestamps: false,
  }
);

module.exports = DealershipUser;
