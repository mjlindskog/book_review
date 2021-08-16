const router = require('express').Router();
const sequelize = require('../../config/connections');
const { User } = require('../../model');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// add withAuth in once passport is configured
const { withAuth } = require('../../utils/auth');
const passport = require('passport');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(userData);
    } catch (err) {
        console.log(err) ;
        res.status(500).json(err);
    }
});
  
router.get('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            attributes: {exclude: ['password']}
        });
        if (!userData) {
            res.status(404).json({ message: 'No user found with that id!' });
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// // /api/users/
// router.get('/', (req, res) => {
//     User.findAll({
//         attributes: { exclude: ['password'] }
//     })
//     .then(userData => res.json(userData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // /api/users/:id
// router.get('/:id', (req,res) => {
//     User.findOne({
//         attributes: {exclude: ['password']},
//         where: {id: req.params.id},

//     })
//     .then(userData => res.json(userData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

router.post("/login", passport.authenticate('local', {failureRedirect: '/login', successRedirect: '/'}));

// router.post("/", (req, res) => {
//     User.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//     })
//     .then((userData) => {
//         res.json(userData);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.post('/', (req, res) => {
//     User.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//     })
//     .then(userData => {
//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.username = userData.username;
//             req.session.loggedIn = true;
      
//             res.json(userData);
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.post('/login',  (req, res) => {
//     User.findOne({
//         where: { email: req.body.email }
//     })
//     .then(userData => {
//         if (!userData) {
//         res.status(400).json({ message: 'No user with that email address!' });
//         return;
//         }
//         const validPassword = userData.checkPassword(req.body.password);
//         if (!validPassword) {
//             res.status(400).json({ message: 'Incorrect password!' });
//             return;
//         }
//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.username = userData.username;
//             req.session.loggedIn = true;
    
//           res.json({ user: userData, message: 'You are now logged in!' });
//         });
//     });  
// });

// router.post('/logout', withAuth, (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     } else {
//         res.status(404).end();
//     }
// });

// router.put('/:id', withAuth, (req, res) => {
//     User.update(req.body, {
//         individualHooks: true,
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(userData => {
//         if (!userData[0]) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//         }
//         res.json(userData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.delete('/:id', withAuth, (req, res) => {
//     User.destroy({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(userData => {
//         if (!userData) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//         }
//         res.json(userData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });


module.exports=router;