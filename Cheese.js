const { Model, Sequelize } = require('sequelize');
const sequelize = require('./db');


const Cheese = sequelize.define('cheese', {
    title: Sequelize.STRING,
    description: Sequelize.STRING
})

module.exports = Cheese;