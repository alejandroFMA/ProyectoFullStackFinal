const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USERNAME, process.env.SQL_PASSWORD, {
    host: process.env.SQL_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false 
      }
    }
  });

const connectSQL = async () => {
    try {
        await db.authenticate();
    } catch (error) {
        console.error('Unable to connect to SQL database:', error);
    }
};

connectSQL();

module.exports = {
    connectSQL,
    db
};
