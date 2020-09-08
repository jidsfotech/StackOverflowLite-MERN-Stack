import Question from '../models/question';
import Answer from '../models/answer';
import { validateAnswerInput } from '../validation/validate_question_answer'; 


var answerHandler = {
    //handles route that post an nswer to a question 
    answer: {
        post: async (req, res) => {
            console.log('answer handler called')
            // validate user input
            console.log("validating answer input")
            const { errors, isValid } = validateAnswerInput(req.body)

            //check validation
            if (!isValid) {
                
                res.status(400);
                res.json({ answer: 'Answer field can not be empty' });
                console.log(errors);
            } else {
                // create a new answer 
                const answer = new Answer({
                    _author: req.body.author,
                    answer_body: req.body.answer,
                    meta: {
                        up_votes: 0,
                        down_votes: 0
                    },
                    question_id: req.params.questionId
                });

                //save answer in database
                console.log('Saving answer in database.......');
                await answer.save()
                    .then(async answer => {
                        await Question.updateOne(
                            { _id: req.params.questionId },{ $push: { answers: answer }, })
                            .then(console.log('question updated successfully'))
                            .catch(err => console.log(err));

                        console.log('Answer saved successfully');
                        res.status(200);
                        res.json({ Answer: answer });
                    })
                    .catch(err => {
                        res.status(400);
                        res.json(err); //return error if unable to save answer
                        console.log('FaiLure!!!.... Unable to save answer in database..')
                    });
            }
        }
    }
}

module.exports = answerHandler;
