const router = require('express').Router();
const sequelize = require('../../config/connections');
const { Books, Comment, Reviews, User } = require('../../model');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// add withAuth in once passport is configured
const withAuth = require('../../utils/auth');

// /api/books/
router.get('/', (req, res) => {
    Books.findAll({
        attributes: [
            'id',
            'book_title',
            'author'
        ]
    })
    .then(bookData => res.json(bookData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// /api/books/:id
router.get('/:id', (req,res) => {
    Books.findOne({
        where: {id: req.params.id},
        attributes: [
            'id',
            'book_title',
            'author'
        ],
        include: [
            {
                model: Reviews,
                attributes: ['id', 'review_content'],
                include: {
                    model: User,
                    attributes: ['username']
                } 
            }
        ]
    })
    .then(bookData => res.json(bookData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});