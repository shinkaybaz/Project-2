const authController = require('../controllers/authcontroller.js');
const path = require('path');

module.exports = function(app, passport) {

  app.get('/', (req, res, next) => {
    res.render(path.join(__dirname, '../views'));
    // res.send('Welcome to PetApp');
  });

  app.get('/signup', authController.signup);

  app.get('/signin', authController.signin);

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signin'
  }), (req, res) => {
    console.log('callback', req, res)
  });

  app.get('/profile', isLoggedIn, authController.userloggedin);

  app.get('/logout', authController.logout);

  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
  }));

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
  };
}

