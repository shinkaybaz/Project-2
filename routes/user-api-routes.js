// var db = require("../models");

// module.exports = function(app) {
//   app.get("/api/profile", function(req, res) {
//     db.User.findAll({
//       include: [db.Post]
//     }).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });

//   app.get("/api/profile/:id", function(req, res) {
//     db.User.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Post]
//     }).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });

//   app.post("/api/profile", function(req, res) {
//     db.User.create(req.body).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });

//   app.delete("/api/profile/:id", function(req, res) {
//     db.User.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });

// };
