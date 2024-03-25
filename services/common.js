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
 token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDE1ZDZjODI0N2ViM2E4N2IwZWY4MiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzExMzY1NDg0fQ.SDkPyeqVVffg2QXxytBGggJuYdVMArHqLVsqIF99ZvM"
  return token;
};