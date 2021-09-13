
const Validator = require('validator');
const isEmpty = require('is-empty');

//validate user registration input
const  validateRegisterInput = data => {
    let errors = {};

// Converting empty fields to an empty string so we use validator function
data.name = !isEmpty(data.name) ? data.name: "";
data.email = !isEmpty(data.email) ? data.email: "";
data.password = !isEmpty(data.password) ? data.password: "";

// Name checks 
if (Validator.isEmpty(data.name)){
    errors.name = "Name field is required";
}

// Email checks
if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

// Password checks
if (Validator.isEmpty(data.password)) {
    errors.password = "password field is required";
}

if (Validator.isEmpty(data.password2)){
    errors.password2 = "Comfirm passowrd field is required";
}

if (!Validator.isLength(data.password, {min:6, maximum:30})){
    errors.password = "passowrd must be at leat 6 characters";
}

if (!Validator.equals(data.password, data.password2)){
    errors.password2 = "Pasword did not match"
}

return { errors, isValid: isEmpty(errors) }
}

module.exports = validateRegisterInput;