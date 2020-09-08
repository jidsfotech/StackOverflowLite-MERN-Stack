const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const User = require('../models/user');
const Question = require('../models/question')

module.exports = {
    dbSetup() {
        // connect to mongoose 
        beforeAll(async () => {
            const url = 'mongodb://127.0.0.1/stackoverflowliteDB';
            await mongoose.connect(url, { useNewUrlParser: true });
            console.log('connected to test database...')
        });

        // delete data entered during test and disconnect from mongoose after 
        afterAll(async () => {
            await User.deleteOne({email:'signupuser@gmail.com'});
            await Question.deleteOne({ question_title: 'This is the tilte' });
            await mongoose.connection.close();
        });


    }
}
