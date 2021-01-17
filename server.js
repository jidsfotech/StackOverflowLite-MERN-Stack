require('dotenv').config();
const mongoose = require ('mongoose');
const app = require ('./app');
const dataBaseHost = require('./config/keys').dataBaseHost;
const dev_dataBaseHost = require('./config/keys').dev_dataBaseHost;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const db_url =  process.env.NODE_ENV == "developement" ? dev_dataBaseHost : dataBaseHost 

//connect to mongoose 
mongoose.connect(db_url)
    .then(() => console.log("Connected to Stackoverflow-lite database sucessfully"))
    .catch(err => console.log(err));

// process.env.port is Heroku's port
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server up and running on http://localhost:${port}`));
 
