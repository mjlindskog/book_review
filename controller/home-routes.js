const router = require('express').Router();
const sequelize = require('../config/connections');
const { Reviews, Books, User, Comment } = require('../model');
const { withAuth } = require('../utils/auth');
const passport = require('passport');


// router.get('/', withAuth, (req, res) => {
//     Reviews.findAll({
//         where: {user_id: req.session.user_id},
//         attributes: [
//             'id',
//             'review_content',
//             'book_id',
//             'created_at',
//         ],
//         order: [[ 'created_at', 'DESC']],
//         include: [
//             {
//                 model: User,
//                 attributes: ['username']
//             },
//             {
//                 model: Comment,
//                 attributes: ['id', 'comment_content', 'review_id', 'user_id', 'created_at'],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             }
//         ]
//     })
//     .then(reviewData => {
//         const reviews = reviewData.map(review => review.get({ plain: true }));
//         res.render('homepage', {
//             ...reviews,
//             loggedIn: true
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.get('/review/:id', (req, res) => {
//     Reviews.findOne({
//         where: { id: req.params.id },
//         attributes: [
//             'id',
//             'review_content',
//             'book_id',
//             'created_at',
//         ],
//         include: [
//             {
//                 model: User,
//                 attributes: ['username']
//             },
//             {
//                 model: Comment,
//                 attributes: ['id', 'comment_content', 'review_id', 'user_id', 'created_at'],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//                 }
//             }
//         ]
//     })
//     .then(reviewData => {
//         if (!reviewData) {
//             res.status(404).json({ message: 'No review with corresponding id' });
//             return;
//         }
//         const review = reviewData.get({ plain: true });
//         res.render('review', {
//             ...review,
//             loggedIn: true
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.get('/login', async (req, res) => {
//     if (!req.session.loggedIn) {
//         console.log('not logged in')
//         res.render('login');
//         return;
//     } else if (withAuth){
//         console.log('logged in')
//         res.redirect(`/`)
//         return;
//     } 
// });

router.get('/signup', (req, res) => {
    if (!req.session.loggedIn) {
        res.render('signup');
        return;
    } else {
        res.redirect(`/`)
        return;
    }
});

router.get('/', (req, res) => {
    const data = { user: req.user };
    res.render('homepage', data);
});

router.get('/login', (req, res) => {
    if(req.user) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

// router.get('/signup', (req, res) => {
//     if(req.user) {
//       res.redirect('/');
//       return;
//     }
//     res.render('signup');
// });

// router.get('/', (req,res) => {
//     if(req.user) {
//       res.redirect('/');
//       return;
//     }
//     res.render('login');
// })

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

// // Homepage

// router.get('/',  (req, res) => {
//     try{
//         res.render('homepage');
//     } catch (err) {
//         console.log(err);
//     }
// });

module.exports = router;
