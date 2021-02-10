
const express = require('express');
const passport = require('passport');
const questionsController = require("../controllers/questions")
const router = express.Router();


// @route /questions 
// @desc handles questions asked --> saves question in the databse 
router.post(
    '/question',
    passport.authenticate('mock', { session: false }),
    (req, res) => {
        new questionsController().askQuestion(req, res);
    })


// @route /questions
// @desc retrives all the questions available in the the database 
router.get(
    '/questions',
    passport.authenticate('mock', { session: false }),
    (req, res) => {
        new questionsController().getAllQuestions(req, res);
    }
);


// @route /questions/:id 
// @desc retrieve a single question using the question id
router.get(
    '/question/:questionId',
    passport.authenticate('mock', { session: false }),
    (req, res) => {
        new questionsController().getQuestion(req, res);
    }
);

// @route POST userId/questions
// @desc retrieves all the questions asked by a particular user  
router.get(
    '/:userId/questions',
    passport.authenticate('mock', { session: false }),
    (req, res) => {
        new questionsController().getQuestionsFromUser(req, res);
    });


// @routes /:questionId/answer
// @desc Add an answer ---> Post an answer to a question.
router.post(
    '/:questionId/answer',
    passport.authenticate('mock', { session: false }),
    (req, res) => {
        new questionsController().answerQuestion(req, res);
    });


// @route /:questionId/comment
// @desc Post a comment to an answer.
router.post
    ('/:questionId/comment',
        passport.authenticate('mock', { session: false }),
        (req, res) => {
            new questionsController().commentOnQuestion(req, res);
        });


// @route /delete/:questionId
// @desc Delete a question and it's component from the databse
router.delete(
    '/delete/:questionId', 
    passport.authenticate('mock', { session: false }),
    (req, res) => {
        new questionsController().deleteQuestion(req, res)
    });


// @route GET /searchgit 
// @desc search the database for questions base on quesry string 
router.get(
    '/search',
    passport.authenticate('mock', { session: false }),
    (req, res) => { 
        new questionsController().search(req, res) 
    });

module.exports = router;