const { db } = require("../config/sql_connection");
const { DataTypes } = require("sequelize");

const Restaurants = db.define(
  "restaurants",
  {
    user_id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      field: "name",
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true
    },
    //Checks that a password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.
    address: {
      field: "address",
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type: {
        field: "type",
        type: DataTypes.STRING(100),
        allowNull: false,
      },

    vegan: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    rating: {
        field: "rating",
        type: DataTypes.DECIMAL(3,1),
        allowNull: false,
        defaultValue: 0.0
      }
  },
  {
    db,
    modelName: "Restaurants",
    tableName: "restaurants",
    timestamps: false,
  }
);

Restaurants.sync();

module.exports = Restaurants;
