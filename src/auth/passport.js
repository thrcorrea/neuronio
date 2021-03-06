const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const GoogleStrategy = require('passport-google-oauth20');
const UsersService = require('../services/users');

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${process.env.baseUrl}/login/facebook/return`,
      profileFields: ['id', 'email', 'name']
    },
    function(accessToken, refreshToken, profile, callback) {
      console.log(profile);
      const user = Object.assign(
        {},
        {
          facebookId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName
        }
      );
      UsersService.createOrUpdate(user)
        .then(newUser => {
          return callback(null, newUser);
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
      const user = Object.assign(
        {},
        {
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName
        }
      );
      UsersService.createOrUpdate(user)
        .then(newUser => {
          console.log('NEW USer', newUser);
          return callback(null, newUser);
        })
        .catch(err => callback(err));
    }
  )
);

module.exports = passport;
