import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const answersSchema = new Schema({
    //  one-to-one relationship with user schema ==> user_id
    _author: {type: Schema.Types.ObjectId, ref:'user' },

    answer_body: { type: String },
    date: { type: Date, default: Date.now },
    meta: {
        up_votes: {type: Number},
        down_votes: {type: Number}
    },

    // one-to-one relationship with question schema ==> question_id
    question_id: {type: Schema.Types.ObjectId, ref:'question' },
},
    { collection: 'answers' }
);

module.exports = mongoose.model('answers', answersSchema);
