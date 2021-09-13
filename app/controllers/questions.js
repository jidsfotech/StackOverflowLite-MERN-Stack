const questionsServices = require("../services/questions")
const httpStatus = require("http-status");

class Questions {
    constructor() { }

    async askQuestion(req, res) {
        return new questionsServices().askQuestion(req.body)
            .then((response) => {
                return res.status(200).send(
                    httpStatus.CREATED,
                    {
                        message: "Question posted successfully",
                        data: response
                    })
                    .catch((error) => {
                        return res.status(400).send(
                            httpStatus.INTERNAL_SERVER_ERROR,
                            {
                                message: "Fail to post question",
                                error: error
                            })
                    })
            })
    }

    async getQuestion(req, res) {
        return new questionsServices().getQuestion(req.params)
            .then((response) => {
                return res.send(
                    httpStatus.OK,
                    {
                        message: "Question fetched successfully",
                        data: response
                    }
                )
            })
            .catch((error) => {
                return res.send(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    {
                        message: "Fail to load question",
                        error: error
                    }
                )
            })
    }

    async getAllQuestions(req, res) {
        return new questionsServices().getAllQuestions()
            .then((response) => {
                return res.send(
                    httpStatus.OK,
                    {
                        message: "All questions loadded succesufully",
                        data: response
                    })
            })
            .catch((error) => {
                return res.send(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    {
                        message: "Fail to load questions",
                        error: error
                    })
            })
    }

    async getQuestionsFromUser(req, res) {
        return new questionsServices().getQuestionsFromUser(req.params)
            .then((response) => {
                return res.send(
                    httpStatus.OK,
                    {
                        message: "retrieved all questions asked by" + " " + response.userName + " " + "succesufully",
                        data: response
                    })
            })
            .catch((error) => {
                return res.send(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    {
                        message: "Fail to load questions",
                        error: error
                    })
            })
    }

    async answerQuestion(req, res) {
        return new questionsServices().answerQuestion(req)
        .then((response) => {
            return res.send(
                httpStatus.OK,
                {
                    message: "Answer posted successfully",
                    data: response
                })
        })
        .catch((error) => {
            return res.send(
                httpStatus.INTERNAL_SERVER_ERROR,
                {
                    message: "FaiLure!!!.... Unable to save answer in database..",
                    error: error
                })
        })
    }

    async commentOnQuestion(req, res) {
        return new questionsServices().commentOnQuestion(req)
        .then((response) => {
            return res.send(
                httpStatus.OK,
                {
                    message: "Comment posted successfully",
                    data: response
                })
        })
        .catch((error) => {
            return res.send(
                httpStatus.INTERNAL_SERVER_ERROR,
                {
                    message: "FaiLure!!!.... Unable to save comment in database..",
                    error: error
                })
        })
    }

    async search(req, res) {
        return new questionsServices().search(req.query)
        .then((response) => {
            return res.send(
                httpStatus.OK,
                {
                    message: "Search result",
                    data: response
                }) 
        })
        .catch(
            (error) => {
                return res.send(
                    {
                        message: "Search word does not match any question asked before",
                        Error: error
                    })
            }
        )
    }

    async deleteQuestion(req, res) {
        return new questionsServices().deleteQuestion(req.params)
        .then((response) => {
            return res.send(
                httpStatus.OK,
                {
                    message: "question was deleted successfully",
                    data: response.question_title
                })
        })
        .catch((error) => {
            return res.send(
                httpStatus.INTERNAL_SERVER_ERROR,
                {
                    message: "Deletion failed",
                    error: error
                })
        })
    }
}

module.exports = Questions;
