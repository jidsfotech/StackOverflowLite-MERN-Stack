const joi = require("joi");
joi.objectId = require('joi-objectid')(joi)

const userLogin = joi.object({
    email: joi.string().required(),
    password: joi.string().required()
});

const userRegistration = joi.object({
    username: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    password2: joi.string().optional(),
    profileImage: joi.string().optional()
});

const question = joi.object({
    author: joi.objectId().required(),
    title: joi.string().required(),
    question: joi.string().required(),
    tags: joi.string()
});

const answerParams = joi.object({
    questionId: joi.objectId().required()
});

const answerBody = joi.object({
    author: joi.objectId().required(),
    answer: joi.string().required(),
});

let answer = { answerParams, answerBody }

const commentParams = joi.object({
    questionId: joi.objectId().required()
});

const commentBody = joi.object({
    author: joi.objectId().required(),
    comment: joi.string().required(),
});

let comment = { commentParams, commentBody }

const search = joi.object({
    queryString: joi.string().required()
});

const userVerification = joi.object({
    code: joi.string().required(),
    userId: joi.string().required()
});

const retryUserVerification = joi.object({
    email: joi.string().required()
})

const updateUser = joi.object({
    username: joi.string().optional(),
    oldPassword: joi.string().optional(),
    newPassword: joi.string().optional(),
    profileImage_url: joi.string().optional(),
});

const updateUserParams = joi.object({
    userId: joi.string().required(),
});

const updatePassword = joi.object({
    code: joi.string().required(),
    email: joi.string().required(),
    newPassword: joi.string().optional(),
});

module.exports = {
    userLogin,
    userRegistration,
    question,
    answer,
    comment,
    search,
    userVerification,
    retryUserVerification,
    updateUser,
    updateUserParams,
    updatePassword
}