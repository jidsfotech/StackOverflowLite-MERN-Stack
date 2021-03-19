
const express = require('express');
const passport = require('passport');
const questionsController = require("../controllers/questions");
const validationSchema = require("../validations/validator");
const validate = require("../lib/express-joi-validator");
const router = express.Router();

// @route /questions 
// @desc handles questions asked --> saves question in the databse 
router.post(
    '/question',
    passport.authenticate('jwt', { session: false }),
    validate({
        validateBody: validationSchema.question
    }),
    (req, res) => new questionsController().askQuestion(req, res)
);


// @route /questions
// @desc retrives all the questions available in the the database 
router.get(
    '/questions',
    passport.authenticate('jwt', { session: false }),
    (req, res) => new questionsController().getAllQuestions(req, res));


// @route /questions/:id 
// @desc retrieve a single question using the question id
router.get(
    '/question/:questionId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => new questionsController().getQuestion(req, res));


// @route POST userId/questions
// @desc retrieves all the questions asked by a particular user  
router.get(
    '/:userId/questions',
    passport.authenticate('jwt', { session: false }),
    (req, res) => new questionsController().getQuestionsFromUser(req, res));


// @routes /:questionId/answer
// @desc Add an answer ---> Post an answer to a question.
router.post(
    '/:questionId/answer',
    validate({
        validateParams: validationSchema.answer.answerParams,
        validateBody: validationSchema.answer.answerBody,
    }),
    passport.authenticate('jwt', { session: false }),
    (req, res) => new questionsController().answerQuestion(req, res));


// @route /:questionId/comment
// @desc Post a comment to an answer.
router.post(
    '/:questionId/comment',
    validate({
        validateParams: validationSchema.comment.commentParams,
        validateBody: validationSchema.comment.commentBody,
    }),
    passport.authenticate('jwt', { session: false }),
    (req, res) => new questionsController().commentOnQuestion(req, res));


// @route /delete/:questionId
// @desc Delete a question and it's component from the databse
router.delete(
    '/delete/:questionId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => new questionsController().deleteQuestion(req, res));


// @route GET /searchgit 
// @desc search the database for questions base on quesry string 
router.get(
    '/search',
    validate({queryString: validationSchema.search }),
    (req, res) => new questionsController().search(req, res)
);

module.exports = router;