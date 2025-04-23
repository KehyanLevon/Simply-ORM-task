const Car = require("./car");
const Feature = require("./feature");
const Rating = require("./rating");

const Make = require("./make");
const Model = require("./model");

const Dealership = require("./dealership");
const DealershipUser = require("./dealership_user");
const User = require("./user");

Car.belongsToMany(Feature, {
  through: "car_features",
  foreignKey: "car_id",
  otherKey: "feature_id",
  timestamps: false,
});
Feature.belongsToMany(Car, {
  through: "car_features",
  foreignKey: "feature_id",
  otherKey: "car_id",
  timestamps: false,
});

Car.belongsTo(Model, { foreignKey: "model_id" });
Model.hasMany(Car, { foreignKey: "model_id" });

Model.belongsTo(Make, { foreignKey: "make_id" });
Make.hasMany(Model, { foreignKey: "make_id" });

Rating.belongsTo(Car, { foreignKey: "car_id" });
Rating.belongsTo(User, { foreignKey: "user_id" });
Car.hasMany(Rating, { foreignKey: "car_id" });
User.hasMany(Rating, { foreignKey: "user_id" });

Dealership.belongsToMany(User, {
  through: DealershipUser,
  foreignKey: "dealership_id",
  otherKey: "user_id",
  as: "users",
});
User.belongsToMany(Dealership, {
  through: DealershipUser,
  foreignKey: "user_id",
  otherKey: "dealership_id",
  as: "dealerships",
});

Dealership.hasMany(Car, { foreignKey: "dealership_id" });
Car.belongsTo(Dealership, { foreignKey: "dealership_id" });

module.exports = {
  Car,
  Feature,
  Rating,
  Make,
  Model,
  Dealership,
  DealershipUser,
  User,
};
