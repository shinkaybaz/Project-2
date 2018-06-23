var path = require("path");
const db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {



  app.get("/", function (req, res) {
    res.render('index');
    console.log('\nindex');
  });

  app.get("/index", function (req, res) {
    res.render(path.join("index.handlebars"));
    console.log('\nindex');
  });

  // cms route loads cms
  app.get("/add", function(req, res) {
    res.render(path.join("add.handlebars"), req.user);
    console.log('\nadd');
  });

  // blog route loads blog
  app.get("/about", function (req, res) {
    res.render(path.join("about.handlebars"));
    console.log('\nabout');
  });

  // app.get("/profile", function(req, res) {
  //   db.Budget.findAll()
  //   .then(function (dbBudget) {
  //       db.Content.findAll()
  //           .then(function (dbContent) {
  //               res.render('profile', { 
  //                 budgets: dbBudget, activities: dbContent 
  //               });
  //           })
  //   })
  //   .catch(function (err) {
  //       res.json(err);
  //   })
  // });

  app.get("/signin", function (req, res) {
    res.render(path.join("signin.handlebars"));
    console.log('\nsignin');
  });

  app.get("/signup", function (req, res) {
    res.render(path.join("signup.handlebars"));
    console.log('\nsignup');
  });

  app.get("/budget", function (req, res) {
    db.Budget.findAll()
    .then(function (dbBudget) {
        res.render('budget',{
            budgets: dbBudget,
        });
        return ({ budgets: dbBudget });
      })
      .catch(function (err) {
        res.json(err);
      })
  });

  app.get("/content", function (req, res) {
    db.Content.findAll()
    .then(function (dbContent) {
        res.render('content',{
            activities: dbContent,
        });
        return ({ activities: dbContent });
      })
      .catch(function (err) {
        res.json(err);
      })
  });
};
