const { boolean } = require('@hapi/joi');
const mongoose = require ('mongoose');
const Question = require ('./questions');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

// create user schema 
const UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    isVerified: { type: Boolean, required: true },
    verificationCode: { type: String, required: true },
    profileImage_url: { type: String, required: false },

    // one-to-many relationship with question schema
    questions:[{
        type: Schema.Types.ObjectId,
        ref: 'questions'
    }]
},
    { collection: 'users' }
);

module.exports = mongoose.model('users', UserSchema);