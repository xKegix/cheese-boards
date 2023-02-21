const { Model, Sequelize } = require('sequelize');
const sequelize = require('./db');

const Board = require('./Board');

const User = sequelize.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
})


User.hasMany(Board);

module.exports = User;

