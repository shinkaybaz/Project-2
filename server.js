const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');

const db = require('./models');

const exphbs = require("express-handlebars");

app.use(express.static("public"));
//BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Handlebars
app.set('views', './views');
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Passport, express session and passport session
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// require('./routes/html-routes.js')(app);
require('./routes/auth-api-routes.js')(app, passport);
require('./routes/api-routes.js')(app, passport);
require('./config/passport/passport.js')(passport, db.User);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function(err) {
    if (!err) {
      console.log("App listening on PORT " + PORT);
    } else {
      console.log('Database has err: ', err)
    }
  });
}).catch((err) => {
  console.log('\n Something wrong and here is the err: ', err)
});