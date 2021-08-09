const { User } = require('../model');

const fakeUsers = [
    {
        username: 'bambam',
        email: 'bambam@gmail.com',
        password: 'testpassword'
    },
    {
        username: 'pampam',
        email: 'pampam@gmail.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(fakeUsers);

module.exports = seedUsers;