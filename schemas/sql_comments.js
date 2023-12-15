const { db } = require("../config/sql_connection");
const { DataTypes } = require("sequelize");

const Comment = db.define(
  "Comment", 
  {
    id_comments: {
      field: "id_comments",
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    id_user: {
      field: "id_user",
      type: DataTypes.BIGINT,
      allowNull: false,
      
    },
    id_restaurant: {
      field: "id_restaurant",
      type: DataTypes.BIGINT,
      allowNull: false,
      
    },
    text: {
      field: "text",
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timestamp: {
      field: "timestamp",
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW

    },

  },
  {
    sequelize: db, 
    tableName: "comments",
    timestamps: false,
  }
);


module.exports = Comment;
