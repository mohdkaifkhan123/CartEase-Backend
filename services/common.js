const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
 token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjlhYjA2Y2M1YTlkNDY3ODViNzExZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEwODYxNjExfQ.eB_lr4V3qE-gJGCGJ8oCwCMpoWHOJJCZO26n-RXgyj8"
  return token;
};