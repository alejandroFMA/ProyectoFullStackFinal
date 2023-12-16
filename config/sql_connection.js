const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize(`postgres://${process.env.SQL_USERNAME}:${process.env.SQL_PASSWORD}@${process.env.SQL_HOST}/${process.env.SQL_DATABASE}?ssl=true`, {
    logging: console.log, // Esta línea activa los logs de las consultas SQL
})



const connectSQL = async () => {
    try {
        await db.authenticate();
        console.log('PostgreSQL database connected...');
    } catch (error) {
        console.error('Unable to connect to SQL database:', error);
    }
};

connectSQL();

module.exports = {
    connectSQL,
    db
};
