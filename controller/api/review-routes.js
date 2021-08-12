const router = require('express').Router();
const { Reviews, User, Comment } = require('../../model');
const sequelize = require('../../config/connections');
// add withAuth in once passport is configured
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Reviews.findAll({
        attributes: [
            'id',
            'review_content',
            'book_title',
            'author',
            'created_at'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_content', 'review_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
        ]
    })
    .then(reviewData => res.json(reviewData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Reviews.findOne({
        where: { id: req.params.id },
        attributes: [
            'id',
            'review_content',
            'book_title',
            'author',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_content', 'review_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(reviewData => {
        if (!reviewData) {
            res.status(404).json({ message: 'No review with corresponding id' });
            return;
        }
        res.json(reviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Reviews.create({
        review_content: req.body.review_content,
        book_title: req.body.book_title,
        author: req.body.author,
        user_id: req.session.user_id,
    })
    .then(reviewData => res.json(reviewData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    Reviews.update(req.body,
        {
            where: { id: req.params.id }
        }
    )
    .then(reviewData => {
        if (!reviewData) {
            res.status(404).json({ message: 'No review with corresponding id' });
            return;
        }
        res.json(reviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.delete('/:id', (req, res) => {
    Reviews.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(reviewData => {
        if (!reviewData) {
          res.status(404).json({ message: 'No post with corresponding id' });
          return;
        }
        res.json(reviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports=router;