const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20');
const UsersService = require('../services/users');

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${process.env.baseUrl}/login/facebook/return`
    },
    function(accessToken, refreshToken, profile, callback) {
      console.log(profile);
      UsersService.findOrCreateFacebook(profile)
        .then(user => {
          return callback(null, user);
        })
        .catch(err => {
          return callback(err);
        });
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_APP_ID,
      clientSecret: process.env.GOOGLE_APP_SECRET,
      callbackURL: `${process.env.baseUrl}/login/google/return`
    },
    function(accessToken, refreshToken, profile, callback) {
      console.log('GOOGLE:', profile);
      UsersService.findOrCreateGoogle(profile)
        .then(user => {
          return callback(null, user);
        })
        .catch(err => callback(err));
    }
  )
);

module.exports = passport;
