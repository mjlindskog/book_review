const User = require('./User');
const Reviews = require('./Reviews');
const Books = require('./Books');
const Comment = require('./Comments');

User.hasMany(Reviews, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Reviews.belongsTo(User, {
    foreignKey: 'user_id',
});

Reviews.hasMany(Comment, {
    foreignKey: 'review_id'
});

Books.hasMany(Reviews, {
    foreignKey: 'book_id'
});

// Reviews.belongTo(Books, {
//     targetKey: 'book_id'
// });

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
  
Comment.belongsTo(Reviews, {
    foreignKey: 'review_id'
});

module.exports = { User, Reviews, Books, Comment };