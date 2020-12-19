//import passportJWT from 'passport-jwt';
const  User = require ( '../models/user');
const  keys = require ('./keys') ;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const MockStrategy = require('passport-mock-strategy');

const opts = {};


opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;



module.exports = passport => {
    /**passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err))
        }) 
    )*/
    passport.use(new MockStrategy());
};