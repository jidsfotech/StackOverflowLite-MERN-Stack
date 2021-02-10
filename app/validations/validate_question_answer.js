const isEmpty = require ('is-empty');
const validator = require ('validator');


const validateQuestionInput = data => {
    let errors = {};

    // check if the author field is empty
    if(isEmpty(data.author)){
        errors.author = "missing user_id"
    }

    //check if the title field is empty
    if(isEmpty(data.title)){
        errors.title = "Title is required"
    }

    // check if the question field is empty
    if(isEmpty(data.question)){
        errors.question = "Question field is required"
    }

    return {errors, isValid: isEmpty(errors)}
}


const validateAnswerInput = data => {
    let errors = {};

    //check if the answer field is empty
    if(isEmpty(data.answer)){
        errors.answer = "Answer field can not be empty"
    }

   return {errors, isValid: isEmpty(errors)}
}

const validateCommentInput = data => {
    let errors = {};

    //check if the answer field is empty
    if(isEmpty(data.comment)){
        errors.comment = "comment field can not be empty"
    }

   return {errors, isValid: isEmpty(errors)}
}

module.exports = {validateAnswerInput, validateQuestionInput, validateCommentInput};