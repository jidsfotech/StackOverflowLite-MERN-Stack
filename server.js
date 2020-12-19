
const mongoose = require ('mongoose');
const { devDB } = require  ('./config/keys');
const app = require ('./app');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect to mongoose 
mongoose.connect(devDB)
    .then(() => console.log("Connected to Stackoverflow-lite database sucessfully"))
    .catch(err => console.log(err));

// process.env.port is Heroku's port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on http://localhost:${port}`));

