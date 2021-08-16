const passport = require('passport');
require('dotenv').config();
const { User } = require('../model');

const sequelize = require('./connections');
const Sequelize = require('sequelize');

const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function (passport) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    function(username, password, done) {
        User.findOne({ where: { 'email': username} }, function (err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: 'Incorrect username or password.' });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect username or password.' });
          }
          return done(null, user);
        });
    }
    ));

    // passport.use(new GoogleStrategy({
    //     passReqToCallback: true,
    //     clientID: GOOGLE_CLIENT_ID,
    //     clientSecret: GOOGLE_CLIENT_SECRET,
    //     callbackURL: '/auth/google/callback',
    //     passReqToCallback: true
    // },
    // async (req, accessToken, refreshToken, profile, done) => {
    //     const newGoogle = {
    //         id: profile.id,
    //         username: profile.username,
    //         email: profile.emails[0].value
    //     }
    
    //     try {
    //         let googleID = await User.findByPk(profile.id)
    //         if (googleID) {
    //             return done(null, googleID)
    //         } else {
    //             googleID = await User.create(newGoogle)
    //             return done(null, google)
    //         }
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }
    // ));

    passport.serializeUser((user, done) => {
        return done(null, user.id)
    });

    passport.deserializeUser((id, done) => {
        return User.findByPk(id)
        .then(user => done(null, user))
        .catch((err) => {
            done(err,null)
        })
    });
};