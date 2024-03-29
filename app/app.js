
const express = require('express');
const bodyparser = require('body-parser');
const passport = require('passport');
const usersRoutes = require('./routes/users');
const questionsRoutes = require('./routes/question');
const path = require('path');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(passport.initialize());
//passport config
require('../config/passport')(passport);

// serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")))

app.use(usersRoutes);
app.use(questionsRoutes);


// serve the React app index page if no API route is hit
/*app.use(function(req, res) {
    //res.send( path.join(__dirname, '../client/build/index.html'))
    res.sendFile(path.join(__dirname, "../client/build/", "index.html"));
});*/

app.use(function (req, res) {
    //res.send( path.join(__dirname, '../client/build/index.html'))
    res.sendFile(path.join(__dirname, "../client/build/", "index.html"));
});


/*This keeps your server running and also give you a place to attach the debugger and look for a deeper problem.
process.on('uncaughtException', function (err) {
    console.log(err);
});*/

module.exports = app

