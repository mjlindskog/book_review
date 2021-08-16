const router = require('express').Router();
const sequelize = require('../config/connections');
const { Reviews, Books, User, Comment } = require('../model');
const { withAuth } = require('../utils/auth');


router.get('/', withAuth, (req, res) => {
    Reviews.findAll({
        where: {user_id: req.session.user_id},
        attributes: [
            'id',
            'review_content',
            'book_id',
            'created_at',
        ],
        order: [[ 'created_at', 'DESC']],
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
        const reviews = reviewData.map(review => review.get({ plain: true }));
        res.render('homepage', {
            ...reviews,
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/review/:id', (req, res) => {
    Reviews.findOne({
        where: { id: req.params.id },
        attributes: [
            'id',
            'review_content',
            'book_id',
            'created_at',
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
        const review = reviewData.get({ plain: true });
        res.render('review', {
            ...review,
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if(req.user) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
router.get('/signup', (req, res) => {
    if(req.user) {
      res.redirect('/');
      return;
    }
    res.render('signup');
});

router.get('/', (req,res) => {
    if(req.user) {
      res.redirect('/');
      return;
    }
    res.render('login');
})

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }
  
//     res.render('login');
// });

// router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('signup');
// });

// Homepage

router.get('/',  (req, res) => {
    try{
        res.render('homepage');
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
