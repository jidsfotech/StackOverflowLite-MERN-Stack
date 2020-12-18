
import express from 'express';
import bodyparser from 'body-parser';
import passport from 'passport';
import userRoutes from './routes/api/user';
import questionsRoutes from './routes/api/question';
import path from 'path'

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

app.get('/', (req, res) => {
    res.status(200).send("Welcome To Stackoverflow Lite");
})

app.use((req, res) => {
    res.status(400).send("Bad request");
});

module.exports = app

