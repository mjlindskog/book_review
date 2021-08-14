const router = require ('express').Router();
const passport = require('passport');
const withAuth = require('../utils/auth');

const { User } = require('../model');

// based on documentation
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/auth/google/callback',
    passport.authenticate(['google', 'local'], { failureRedirect: '/' }),
    async (req, res) => {

      res.redirect(`/user/${req.user.dataValues.id}`);
    }
);

router.get('/signup', (req, res) => {
    res.render('signup')
});

router.post('/signup', async (req, res) => {
    try {
      const createUser = await User.create({
        email: req.body.email,
        password: req.body.password
      });
  
      req.session.save(() => {
        req.session.userID = createUser.id;
        req.session.loggedIn = true;
        console.log(createUser)
      return res.redirect(`/`)
        
      })
    } catch (err) {
      console.log(err)
      return res.status(400).json(err)
    }
});
  
router.post('/login', async (req, res) => {
    try {
      const findUser = await User.findOne({ where: { email: req.body.email } });
      if (!findUser) {
        return res.status(401).json({ message: 'Incorrect email or password, please try again' });
      }
      const validPassword = await createUser.checkPassword(req.body.password);
  
      if (!validPassword) {
        return res.status(401).json({ message: 'Incorrect email or password, please try again' });
      } else {
        req.session.save(() => {
          req.session.userID = findUser.id;
          req.session.loggedIn = true;
          return res.redirect(`/user/${req.session.userID}`);
        });
      }
    } catch (err) {
      return res.json(console.log(err));
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
  
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;