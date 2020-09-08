import mongoose from 'mongoose';
import Question from '../models/question'
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

// create user schema 
const UserSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now() },

    // one-to-many relationship with question schema
    questions:[{
        type: Schema.Types.ObjectId,
        ref: 'question'
    }]
},
    { collection: 'user' }
);

module.exports = mongoose.model('user', UserSchema);