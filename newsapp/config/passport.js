const User = require('../mongo/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const FacebookStrategy = require('passport-facebook').Strategy

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  User.findOne({ email })
    .then((user) => {
      if(!user || !user.validatePassword(password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }
      return done(null, user);
    }).catch(done);
}));

passport.use(new FacebookStrategy({
    clientID: '2246101985717316',
    clientSecret: '6797ff06683a92ea7ea87cb35889701c',
    callbackURL: 'http://localhost:3000/user/facebook/callback',
    profileFields: ['id', 'displayName', 'email', 'first_name']
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));
