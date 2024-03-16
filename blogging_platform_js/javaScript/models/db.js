const Sequelize = require('sequelize');

//Create a new Sequalize instance
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres', //Change this based on your database
});

module.exports = sequelize;