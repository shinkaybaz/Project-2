var exports = module.exports = {};
var db = require('../models');

exports.signup = function(req, res) {
  console.log(req.body);
  res.render('signup.handlebars');
};

exports.signin = function(req, res) {
    const UserInfos = {
      id: req.user.id,
      email: req.user.email
    }
  console.log(req.body);
  res.render('signin.handlebars');
  console.log(UserInfos);
};

exports.userloggedin = function(req, res) {
    db.Budget.findAll( {where: {
      UserId: req.user.id
    }})
    .then(function (dbBudget) {
        db.Content.findAll( {where: {
          UserId: req.user.id
        }})
            .then(function (dbContent) {
                res.render('profile', { 
                  budgets: dbBudget, activities: dbContent 
                });
            })
    })
    .catch(function (err) {
        res.json(err);
    })
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  })
}