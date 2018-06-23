const db = require("../models");

module.exports = function (app) {
    app.post('/api/budget', function(req, res) {
        var budget = req.body; 
        req.body.UserId = req.user.id;
        console.log(budget);
        db.Budget.create(req.body).then(function(budget) {
            res.redirect('/budget');
        });
    })
    app.get("/api/budget", function(req, res) {
        db.Budget.findAll()
        .then(function (dbBudget) {
            // if (dbBudget.length===0) {
            //     throw "No results";
            // };

            res.render('budget',{
                budgets: dbBudget,
            });
            return({budgets: dbBudget});
        })
        .catch(function (err) {
            res.json(err);
        })
    });
    
    app.post('/api/content', function(req, res) {
        var active = req.body;
        req.body.UserId = req.user.id;
        console.log(active);
        db.Content.create(req.body).then(function(active) {
            res.redirect('/profile');
        });
    })
    app.get("/api/content", function(req, res) {
        db.Content.findAll()
        .then(function (dbContent) {
            if (dbContent.length===0) {
                // throw "No results";
            };
            res.render('content',{
                activities: dbContent,
            });
            return({activities: dbContent});
        })
        .catch(function (err) {
            res.json(err);
        })
    });

    app.get("/api/profile", function(req, res) {
        db.Budget.findAll( {where: {
            UserId: req.user.id
          }})
        .then(function (dbBudget) {
            db.Content.findAll( {where: {
                UserId: req.user.id
              }})
                .then(function (dbContent) {
                    res.render('profile', { budgets: dbBudget, activities: dbContent });
                })
        })
        .catch(function (err) {
            res.json(err);
        })
    });
};



