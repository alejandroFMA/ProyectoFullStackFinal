const { db } = require("../config/sql_connection");
const { DataTypes } = require("sequelize");

const User = db.define(
  "User",
  {
    id_user: {
      field: "id_users",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      field: "email",
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
      validate: {
        is: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      },
    },
    //Checks that a password has a minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.
    password: {
      field: "password",
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        is: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
      },
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    username: {
      field: "username",
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    modelName: "Users",
    tableName: "users",
    timestamps: false,
  }
);

User.sync();

module.exports = User;
