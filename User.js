const { Model, Sequelize } = require('sequelize');
const sequelize = require('./db');


const User = sequelize.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING
})

module.exports = User;