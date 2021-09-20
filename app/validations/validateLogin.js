const Validator = require('validator');
const isEmpty = require('is-empty');

//validate user login input => data = {username, paswprd}
function validateLoginInput(data){
    const errors = {};

    // Converting empty fields to an empty string so we use validator function
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

// Email check
    if (Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    // Pasword check
    if (Validator.isEmpty(data.password)){
        errors.password = "Password field is required"
    }

    return {errors, isValid: isEmpty(errors)}
}

module.exports = validateLoginInput;