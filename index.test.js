const {sequelize} = require('./db');
const {User, Board, Cheese} = require('./index');


describe ('User, Board, Cheese models', () => {
    beforeAll(async () => {
        await sequelize.sync({
            force: true
        })
    })

    beforeEach(async () => {
        await sequelize.sync( { 
            force:true
        })
    })

    afterEach(async () => {
        await User.sync({force: true});
        await Board.sync({ force: true});
        await Cheese.sync({force: true});
    })

    afterAll(async () => {
        await sequelize.drop();
    })

    // Models

    test ('create and find user', async () => {
        const testUser = await User.create({
            name: 'Kegi',
            email: 'kegi@secretemail.com'
        })
    

    const findUser = await User.findByPk(testUser.id);
        expect(findUser.name).toBe('Kegi');
        expect(findUser.email).toBe('kegi@secretemail.com');
 })

test('update user', async () => {
    const user = await User.create({
        name: 'Jack Chan',
        email: 'jackchan@hotmail.co.uk'
    })

    await User.update({ 
        email: 'newjack@gmail.com'},
        {where: {id: user.id}
    })

    const updateUser = await User.findByPk(user.id);
    expect(updateUser.email).toBe('newjack@gmail.com');
    expect(updateUser.name).toBe('Jack Chan');
})

test ('delete user', async () => {
    const user = await User.create({
        name: 'kegi',
        email: 'dasd@gmail.com'
    })

    let findUser = await User.findByPkd(user.id);

    await User.destroy({
        where: { id: user.id} });

    findUser = await User.findByPk(user.id);
    expect(findUser).toBeNull();
    })


    // board
    test ('create and find board', async () => {
        const board =  await Board.create({
            type: 'idk some cheese',
            description: 'cheesy',
            rating: 5
        })

        const findBoard = await Board.findByPk(board.id);
        expect(findBoard.type).toBe('idk some cheese');
        expect(findBoard.description).toBe('cheesy');
        expect(findBoard.rating).toBe(5);
    })


    // relationship test
    test ('user has many boards', async () => {
        const user = await User.create({
            name: 'kegi',
            email: 'sadas@gmail.com'
        })

        const board = await Board.create({
            type: 'chee chee',
            description 'dasdd',
            rating: 2
        })

        const board2 = await Board.create({
            type: 'chee sad',
            description 'dasddasdasd',
            rating: 4
        })

        await user.addBoard(board);
        await user.addBoard(board2);

        const userWithBoards = await Board.findAll({
            where: {userId: user.id} 
        })
    
        expect(userWithBoards[0].type).toBe('chee chee');
        expect(userWithBoards[0].description).toBe('dasdd');
        expect(userWithBoards[0].rating).toBe(2);

        expect(userWithBoards[1].type).toBe('chee sad');
        expect(userWithBoards[1].description).toBe('dasddasdasd');
        expect(userWithBoards[1].rating).toBe(4);
    })

    test ('board has one user', async () => {

        const user = await User.create({
            name: 'Kegi',
            email: 'efasf@dmad.com'
        })

        const board = await Board.create({
            type: 'chee asdasd',
            description 'dajhgkjhk',
            rating: 3
        })
    
        await board.setUser(user);
        const boardUser = await Board.findOne({
            where: {id: board.id},
            include: User
        })

        expect(boardUser.user.name).toBe('Kegi');
        expect(boardUser.user.email).toBe('efasf@dmad.com');

    })

    test()

})





















})