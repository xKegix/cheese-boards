const {Model, Sequelize } = require('sequelize');
const sequelize = require('./db');

const User = require('./User');
const Cheese = require('./Cheese');

const Board = sequelize.define('board', {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.INTEGER
})

Board.belongsTo(User); 
Board.belongsToMany(Cheese, { through: 'Board_Cheese' });

module.exports = Board;