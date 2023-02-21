const { User } = require('./User');
const {Board} = require('./Board');
const {Cheese} = require('./Cheese');

User.hasMany(Board);

Board.belongsTo(User); 
Board.belongsToMany(Cheese, { through: 'Board_Cheese' });

Cheese.belongsToMany(Board, { through: 'board_cheese' });

module.exports = {
    User,
    Board,
    Cheese
}