
import express from 'express';
import bodyparser from 'body-parser';
import passport from 'passport';
import userRoutes from './routes/api/user';
import questionsRoutes from './routes/api/question';

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(passport.initialize());
//passport config
require('./config/passport')(passport);

app.use('/api', userRoutes);
app.use('/api', questionsRoutes);

app.use( (req, res) => {
    res.json({Error:'API not found'})
});

module.exports = app

