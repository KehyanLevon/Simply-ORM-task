const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Dealership = sequelize.define(
  "Dealership",
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "dealerships",
    timestamps: false,
    paranoid: true,
    deletedAt: "deleted_at",
  }
);

module.exports = Dealership;
