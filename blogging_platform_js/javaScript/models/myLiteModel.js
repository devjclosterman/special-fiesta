// const { DataTypes } = require('sequelize');
// const Sequelize = require('./db');

const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres', // Replace with your actual dialect (e.g., postgres, mysql, sqlite)
});

// Define your models
const Post = sequelize.define('Post', {
  // Define your Post model properties here
});

// Export your models
module.exports = { sequelize, Post };
