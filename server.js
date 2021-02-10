require('dotenv').config();
const mongoose = require ('mongoose');
const app = require ('./app/app');
const config = require('./config/config');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const db =  process.env.NODE_ENV === "test" ? config.mongo.devHost : config.mongo.host; 

//connect to mongoose 
mongoose.connect(db)
    .then(() => console.log(`Connected to ${config.app.name} database sucessfully`))
    .catch(err => console.log(err));

const port = config.app.port
app.listen(port, () => console.log(`Server up and running on http://localhost:${port}`));
 
