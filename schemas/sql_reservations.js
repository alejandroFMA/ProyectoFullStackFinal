const { db } = require("../config/sql_connection");
const { DataTypes } = require("sequelize");

const Reservation = db.define(
  "Reservation", 
  {
    id_reservations: {
      field: "id_reservations",
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
    reservation_datetime: {
      field: "reservation_datetime",
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    customers: {
      field: "customers",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      field: "status",
      type: DataTypes.STRING(50),
      defaultValue: 'Pendiente'
    }
  },
  {
    sequelize: db, 
    tableName: "reservations",
    timestamps: false,
  }
);


module.exports = Reservation;
