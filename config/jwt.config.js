const passportJWT = require("passport-jwt");
const User = require("../schemas/sql_users");
require("dotenv").config();

// Passport & JWT config
const { Strategy: JWTStrategy, ExtractJwt: ExtractJWT } = passportJWT;

const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = `${process.env.JWT_SECRET}`;
const passportJWTStrategy = new JWTStrategy(opts, async (jwtPayload, done) => {
  try {
    const user = await User.findOne({ 
      where: { 
        email: jwtPayload.email, 
        username: jwtPayload.username 
      } 
    });
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (error) {
    done(error, false);
  }
});

// Config passport
module.exports = function(passport) {
  // token strategy
  passport.use(passportJWTStrategy);

  // return configured passport
  return passport;
};
