const User = require('./User');
const Reviews = require('./Reviews');
const Books = require('./Books');

User.hasMany(Reviews, {
    foreignKey: 'user_id'
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id',
});

Books.hasMany(Reviews, {
    foreignKey: 'book_id'
});

Reviews.belongsTo(Books, {
    foreignKey: 'book_id'
});

module.exports = { User, Reviews, Books };