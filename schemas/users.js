const { db } = require("../config/sql_connection");
const { DataTypes } = require("sequelize");
const regex = require("../utils/regex");

const Users = db.define(
  "Users",
  {
    user_id: {
      field: "id",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    email: {
      field: "email",
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true
    },

    password: {
        field: "password",
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            validatePassword: function(password) {
                          if(!(/^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password))) {
                              throw new Error('The password must contain at least 6 including at least 1 uppercase, 1 lowercase adn one number');
                          }
                      }
                  },
    },          
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
  },
  {
    db,
    modelName: "Users",
    tableName: "users",
    timestamps: false
  }
);

Users.sync();

module.exports = Users;