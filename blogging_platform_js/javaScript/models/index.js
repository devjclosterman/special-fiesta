// models/index.js

const sequelize = require('../db');
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// Define associations between models
User.hasMany(Post);
Post.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);
User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = { User, Post, Comment };
