const { Model, Sequelize } = require('sequelize');

const sequelize = require('./db');
const Board = require('./Board');

const Cheese = sequelize.define('cheese', {
    title: Sequelize.STRING,
    description: Sequelize.STRING
});

Cheese.belongsToMany(Board, { through: 'board_cheese' });

module.exports = Cheese;
