const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
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

module.exports = passport;
