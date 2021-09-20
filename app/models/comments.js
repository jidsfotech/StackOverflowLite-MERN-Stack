const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const CommentSchema =  new Schema({

    // one-to-one relationship with user schema ==> user_id
    author: {type: Schema.Types.ObjectId, ref:'users' },
    comment_body: { type: String },
    date: { type: Date, default: Date.now },

    // one-to-one relationship with question schema ==> question_id
    question_id: {type: Schema.Types.ObjectId, ref:'questions' },
},
    { collection: 'comments' }
);

module.exports = mongoose.model('comments', CommentSchema);
