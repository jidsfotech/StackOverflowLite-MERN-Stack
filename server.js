
const mongoose = require ('mongoose');
const app = require ('./app');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


const productionDB = 'mongodb+srv://admin:admin@dev-lwfjq.mongodb.net/StackOverflowliteDB?retryWrites=true&w=majority'
const devDB = 'mongodb://127.0.0.1/stackoverflowliteDB'

const db_url =  process.env.NODE_ENV == "test" ? devDB : productionDB 

console.log(db_url, process.env.NODE_ENV)

//connect to mongoose 
mongoose.connect(db_url)
    .then(() => console.log("Connected to Stackoverflow-lite database sucessfully"))
    .catch(err => console.log(err));

// process.env.port is Heroku's port
const port = process.env.PORT || 9001;

app.listen(port, () => console.log(`Server up and running on http://localhost:${port}`));
 
