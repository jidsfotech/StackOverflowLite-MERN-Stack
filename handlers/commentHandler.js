const  Question = require ('../models/question');
const  Comment = require ('../models/comment');
const {validateCommentInput} = require ('../validation/validate_question_answer');

var commentHandler = {
    //handles route that post comments 
    comment: {
        post: async (req, res) => {
            // validate user input
            console.log("validating comment input")
            const { errors, isValid } = validateCommentInput(req.body)

            //check validation
            if (!isValid) {
                res.status(400).json(errors);
                console.log(errors);
            } else {
                // create a new comment 
                const comment = new Comment({
                    _author: req.body.author,
                    comment_body: req.body.comment,
                    question_id: req.params.questionId
                });

                //save comment in database
                console.log('Saving comment in database.......');
                await comment.save()
                    .then(async comment => {
                        await Question.updateOne(
                            { _id: req.params.questionId },
                            {
                                $push: { comments: comment },
                            })
                            .then(console.log('question updated successfully'))
                            .catch(err => console.log(err));

                        console.log('Comment saved successfully');
                        res.status(200).json({ Comment: comment })
                    })
                    .catch(err => {
                        res.json(err); //return error if unable to save comment
                        console.log('FaiLure!!!.... Unable to save comment in database..')
                  });
            }
        }
    }
}


module.exports = commentHandler;