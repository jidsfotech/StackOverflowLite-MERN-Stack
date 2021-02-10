const Question = require('../models/questions');
const Answer = require('../models/answers');
const isEmpty = require("is-empty");
const User = require("../models/users");
const Comment = require('../models/comments');
const { validateCommentInput, validateQuestionInput, validateAnswerInput } = require('../validations/validate_question_answer');

class Questions {
    constructor() { }

    async askQuestion(payload) {
        return new Promise(async (resolve, request) => {

            // validate user input
            const { errors, isValid } = validateQuestionInput(payload)

            //check validation
            if (!isValid) {
                reject(errors);
                console.log(errors)
            } else {
                // create a new question 
                const question = new Question({
                    _author: payload.author,
                    question_title: payload.title,
                    question_body: payload.question,
                    question_tags: payload.tags,
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
                        await User.updateOne({ _id: payload.author }, { $push: { questions: question }, })
                        console.log('Question saved successfully');
                        resolve(question);
                    })
                    .catch((error) => {
                        console.log('FaiLure!!!.... Unable to save question in database..' + err)
                        return reject({
                            status: false,
                            Error: error
                        }); //return error if unable to save question
                    });
            }
        })
    }

    async getQuestion(payload) {
        return new Promise(async (resolve, reject) => {
            if (isEmpty(payload.questionId)) {
                return reject({
                    status: false,
                    Error: "Missing params"
                });
            } else {
                await Question.findById(payload.questionId)
                    .populate('answers')
                    .populate('comments')
                    .then((response) => {
                        return resolve(response);
                    })
                    .catch((error) => {
                        return reject({
                            status: false,
                            Error: error
                        });
                    });
            }
        });
    }

    async getAllQuestions() {
        return new Promise(async (resolve, reject) => {
            await Question.find()
                .populate('_author')
                .then((response) => {
                    return resolve(response);
                })
                .catch((error) => {
                    return reject({
                        status: false,
                        Error: error
                    });
                });
        });
    }

    async getQuestionsFromUser(payload) {
        return new Promise(async (resolve, reject) => {
            await User.findById(payload.userId)
                .populate('questions')
                .exec((error, user_allQuestions) => {
                    if (error) {
                        return reject({
                            status: false,
                            Error: error
                        });
                    } else {
                        console.log('Successfully retrieved all questions asked by : ' + user_allQuestions.userName);
                        return resolve(user_allQuestions);
                    }
                });
        })
    }

    async answerQuestion(payload) {
        return new Promise(async (resolve, reject) => {
            // validate user input
            console.log("validating answer input")
            const { errors, isValid } = validateAnswerInput(payload.body)

            //check validation
            if (!isValid) {
                reject({ answer: 'Answer field can not be empty' });
                console.log(errors);
            } else {
                // create a new answer 
                const answer = new Answer({
                    _author: payload.body.author,
                    answer_body: payload.body.answer,
                    meta: {
                        up_votes: 0,
                        down_votes: 0
                    },
                    question_id: payload.params.questionId
                });

                //save answer in database
                console.log('Saving answer in database.......');
                Question.findById(payload.params.questionId)
                    .then(async (response) => {
                        if (!response) {
                            return reject({
                                status: false,
                                Error: "Question does not exist"
                            })
                        }
                        await answer.save()
                            .then(async (answer) => {
                                try {
                                    await Question.updateOne({ _id: payload.params.questionId }, { $push: { answers: answer }, })
                                } catch (error) {
                                    return reject({
                                        status: false,
                                        Error: error
                                    });
                                }
                                return resolve(answer);
                            })
                            .catch((error) => {
                                console.log('FaiLure!!!.... Unable to save answer in database..')
                                reject({
                                    status: false,
                                    Error: error
                                })//return error if unable to save answer
                            });
                    })
                    .catch((error) => {
                        return reject({
                            status: false,
                            Error: error
                        })
                    })
            }
        });
    }

    async commentOnQuestion(payload) {
        return new Promise(async (resolve, reject) => {
            // validate user input
            console.log("validating comment input")
            const { errors, isValid } = validateCommentInput(payload.body)

            //check validation
            if (!isValid) {
                reject({ Comment: 'Comment field can not be empty' });
                console.log(errors);
            } else {
                // create a new answer 
                const comment = new Comment({
                    _author: payload.body.author,
                    answer_body: payload.body.answer,
                    meta: {
                        up_votes: 0,
                        down_votes: 0
                    },
                    question_id: payload.params.questionId
                });

                //save answer in database
                console.log('Saving comment in database.......');
                Question.findById(payload.params.questionId)
                    .then(async (response) => {
                        if (!response) {
                            return reject({
                                status: false,
                                Error: "Question does not exist"
                            })
                        }
                        await comment.save()
                            .then(async comment => {
                                try {
                                    await Question.updateOne(
                                        { _id: payload.params.questionId },
                                        {
                                            $push: { comments: comment },
                                        })
                                } catch (error) {
                                    return reject({
                                        status: false,
                                        Error: error
                                    });
                                }
                                return resolve(comment);
                            })
                            .catch((error) => {
                                console.log('FaiLure!!!.... Unable to save comment in database..')
                                reject({
                                    status: false,
                                    Error: error
                                })//return error if unable to save answer
                            });
                    })
                    .catch((error) => {
                        return reject({
                            status: false,
                            Error: error
                        })
                    })
            }
        });
    }

    async search(payload) {
        return new Promise(async (resolve, reject) => {
            const searchResultList = [];
            console.log(payload.queryString);

            //query Question model using search string input fron a user
            await Question.find(
                {
                    $text: { $search: payload.queryString }
                })
                .exec((error, searchResult) => {
                    if (error) {
                        console.log('Search word does not match any question asked before');
                        return reject({
                            status: false,
                            Error: error
                        })
                    } else {
                        searchResult.forEach(questions => {
                            // store the titles of the questions retured by the search result in an Array
                            searchResultList.push(questions.question_title);
                        });
                        return resolve(searchResultList);
                    }
                });
        });
    }

    async deleteQuestion(payload) {
        return new Promise(async (resolve, reject) => {
            await Question.findOneAndRemove({ _id: payload.questionId })
                .then(async (response) => {
                    try {
                        await Answer.findOneAndRemove({ question_id: payload.questionId })
                            .then(async () => {
                                await Comment.findOneAndRemove({ question_id: payload.questionId });
                            })
                            .catch((error) => {
                                return reject({
                                    status: false,
                                    Error: error
                                })
                            })
                    }
                    catch (error) {
                        return reject({
                            status: false,
                            Error: error
                        })
                    }
                    return resolve(response)
                })
                .catch((error) => {
                    console.log('Failure: Deletion process failed');
                    return reject({
                        status: false,
                        Error: error
                    })
                })
        });
    }
}

module.exports = Questions;