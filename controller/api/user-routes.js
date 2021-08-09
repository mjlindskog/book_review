const router = require('express').Router();

const { User } = require('../../model');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const withAuth = require('../../utils/auth');

// /api/users/
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// /api/users/:id
router.get('/:id', (req,res) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {id: req.params.id},

    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
  
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;
  
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports=router;