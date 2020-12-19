
const express = require( 'express');
const passport = require('passport') ;
const Question = require ('../../models/question');
const Answer = require ('../../models/answer');
const  Comment = require ('../../models/comment');
const  User = require ('../../models/user');
const  {validateQuestionInput} = require ('../../validation/validate_question_answer');
const answerHandler = require ('../../handlers/answerHndler');
const commentHandler = require  ('../../handlers/commentHandler');
const isEmpty = require ('is-empty');

const router = express.Router();

// @route GET api/questions
// @desc retrives all the questions available in the the database 
router.get('/questions', passport.authenticate('mock', { session: false }), async (req, res) => {
    await Question.find()
        .populate('_author')
        .exec((error, allQuestions) => {
            if (error) {
                console.log('Faailed!!!.... to retrieved all questions');
                res.status(400).json({ Failure: error });
            } else {
                res.status(200).json({ questions: allQuestions });
                console.log('All questions successfully loaded');
            }
        });
});

// @route GET api/questions/:id 
// @desc retrieves a single question using the question id
router.get('/questions/:questionId', passport.authenticate('mock', { session: false }), async (req, res) => {

    if (isEmpty(req.params.questionId)) {
        console.log('request.... missing questionId parameter');
        res.json({ missingParams: 'request.... missing questionId parameter' });
    } else {

        await Question.findById(req.params.questionId)
            .populate('answers')
            .populate('comments')
            .then((question) => {
                res.status(200).json({ question });
                console.log("question retrieved successfully");
            })
            .catch((error) => {
                console.log('Question not found');
                res.status(400).json({ Failure: error });
            });
    }
});

// @route POST api/questions/userId
// @desc retrieves all the questions asked by a particular user  
router.get('/user/:userId', passport.authenticate('mock', { session: false }), async (req, res) => {
    await User.findById(req.params.userId)
        .populate('questions')
        .exec((error, user_allQuestions) => {
            if (error) {
                res.json({ Failure: error });
                console.log("User has not asked any question", error);
            } else {
                res.status(200).json({ user_allQuestions });
                console.log('Successfully retrieved all questions asked by : ' + user_allQuestions.userName);
            }
        });
});

// @route GET api/search/queryString 
// @desc search the database for questions base on quesry string 
router.get('/questions/search/:queryString', passport.authenticate('mock', { session: false }), async (req, res) => {
    const listOfQuestions = [];

    //query Question model using search string input fron a user
    await Question.find({ $text: { $search: req.params.queryString } })
        .exec((error, searchResult) => {
            if (error) {
                console.log('search does not mach any question asked before');
                res.status(400).json({ error: error });
            } else {
                searchResult.forEach(questions => {
                    // store the titles of the questions retured by the search result in an Array
                    listOfQuestions.push(questions.question_title);
                });
                res.status(200).send(listOfQuestions);
                console.log(listOfQuestions);
            }
        });
});

// @route POST api/questions 
// @desc handles questions asked --> saves question in the databse 
router.post('/questions', passport.authenticate('mock', { session: false }), async (req, res) => {

    // validate user input
    console.log("validating question input")
    const { errors, isValid } = validateQuestionInput(req.body)

    //check validation
    if (!isValid) {
        res.status(400).json({ errors });
        console.log(errors)
    } else {
        // create a new question 
        const question = new Question({
            _author: req.body.author,
            question_title: req.body.title,
            question_body: req.body.question,
            question_tags: req.body.tags,
            meta: {
                no_of_views: 0,
                no_of_answers: 0,
            },

            // to be updated in future when answers are provided for the question
            answers: [],

            // to be updated in future when comments are provided for the question 
            comments: [],
        });

        //save question in database
        console.log('Saving question in database.......');
        await question.save()
            .then(async question => {
                await User.updateOne(
                    { _id: req.body.author },
                    {
                        $push: { questions: question },
                    })
                    .then(updatedUserInfo => console.log(updatedUserInfo))
                    .catch(err => console.log(err));

                console.log('Question saved successfully');
                res.status(200).json({ newQuestion: question })
            })
            .catch(err => {
                res.json({ err }); //return error if unable to save question
                console.log('FaiLure!!!.... Unable to save question in database..' + err)
            });
    }
})

// @routes POST api/questions/:questionId/answers
// @desc Add an answer ---> Post an answer to a question.
router.post('/questions/:questionId/answers', passport.authenticate('mock', { session: false }), answerHandler.answer.post);

// @route POST api/questions/comment
// @desc Post a comment to an answer.
router.post('/questions/:questionId/comment', passport.authenticate('mock', { session: false }), commentHandler.comment.post);

// @route DELETE api/questions/:questionId/delete
// @desc Delete a question and it's component from the databse
router.delete('/questions/:questionId/delete', passport.authenticate('mock', { session: false }), async (req, res) => {
    await Question.findOneAndRemove({ _id: req.params.questionId })
        .then( async (deletedQuestion) => {
            await Answer.findOneAndRemove({ question_id: req.params.questionId })
                .then( async () => {
                    await Comment.findOneAndRemove({ question_id: req.params.questionId })
                        .then(() => {
                            console.log('Success: Deletion successfull');
                            res.status(200).json({ deletedQuestion: deletedQuestion });
                        });
                })
                .catch(error => {
                    console.log('Failure: Deletion process failed');
                    res.status(400).json(error);
                })

        });
    });

    module.exports = router;