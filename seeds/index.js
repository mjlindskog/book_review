const sequelize = require('../config/connections');

const seedUsers = require('./user-seeds.js');
const seedReviews = require('./review-seeds');

const seedAll = async () => {
    await sequelize.sync({force: true});
    // syncs database
    console.log('\n');
    await seedUsers();
    // adds users to db
    console.log('\n');
    await seedReviews();
    // adds reviews to db

    process.exit(0);
};

seedAll();