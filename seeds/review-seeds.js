const { Reviews } = require('../model');

const fakeReviews = [
    {
        review_content: 'Thoroughly enjoyed this book, way better than the movie.',
        user_id: '1',
        book_id: '1',
    },
    {
        review_content: 'My mother recommended this book to me and now I am currently not speaking to her.',
        user_id: '2',
        book_id: '2',
    },
    {
        review_content: 'Long read, great alternative perspective to capitalism set at the turn of the 20th century.',
        user_id: '1',
        book_id: '3',
    }
];

const seedReviews = () => Reviews.bulkCreate(fakeReviews);

module.exports = seedReviews;