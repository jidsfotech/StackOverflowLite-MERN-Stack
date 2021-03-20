
const express  = require ('express');
const bodyparser = require ('body-parser');
const passport = require ('passport');
const usersRoutes = require ('./routes/users');
const questionsRoutes = require ('./routes/question');
const path = require ('path');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(passport.initialize());
//passport config
require('../config/passport')(passport);

// serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")))

// serve the React app index page if no API route is hit
app.use(function(req, res) {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use(usersRoutes);
app.use(questionsRoutes);

app.use((req, res) => {                 
    res.status(400).send("Bad request Resources not found");
});

module.exports = app

