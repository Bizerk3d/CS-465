const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new LocalStrategy({
<<<<<<< HEAD
        usernameField: 'email'
=======
    usernameField: 'email'
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
    },
    (username, password, done) => {
        User.findOne({ email: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);
        });
    }
<<<<<<< HEAD
));
=======
));
>>>>>>> 2652cef428af23f2d3ac793f9cc335b582b8fac5
