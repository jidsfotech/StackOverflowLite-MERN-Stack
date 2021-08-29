
const express  = require ('express');
const bodyparser = require ('body-parser');
const passport = require ('passport');
const userRoutes = require ('./routes/api/user');
const questionsRoutes = require ('./routes/api/question');
const path = require ('path');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(passport.initialize());
//passport config
require('./config/passport')(passport);

// serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")))

app.use('/api', userRoutes);
app.use('/api', questionsRoutes);

app.get('/api', (req, res) => {
    res.status(200).send("Welcome To Stackoverflow Lite");
})

/**app.use((req, res) => {                 
    res.status(400).send("Bad request Resources not found");
});*/

module.exports = app

