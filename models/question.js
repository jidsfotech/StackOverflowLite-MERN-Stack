import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const questionSchema = new Schema({

    // one-to-one relationship with user schema ==> user_id
    _author: { type: Schema.Types.ObjectId, ref:'user'},
    question_title: { type: String },
    question_body: { type: String },
    date: { type: Date, default: Date.now },
    question_tags: [{ type: String }],

    //  one-to-many relationship with answer schema ==> answer_id
    answers: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'answers'
    }],

    // one-to-many relationship with comment schema ==> comment_id
    comments:[{
         type: Schema.Types.ObjectId, 
         ref: 'comment'
        }],

    meta: {
        no_of_views: { type: Number },
        no_of_answers:{type: Number}
    },
},
    { collection: 'question' }
);

questionSchema.index({question_title: 'text'}, {question_tags: 'text'});
module.exports = mongoose.model('question', questionSchema);