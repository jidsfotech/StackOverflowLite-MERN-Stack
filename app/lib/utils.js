const jwt = require('jsonwebtoken');
const moment = require("moment");
const bcrypt = require('bcryptjs');


const generateVerificationCode = () => {
    const randomUniqueDigits = Math.floor(80000 + Math.random() * 70000);
    const expire = moment(new Date()).add(24, 'hours').format('YYYY-MM-DD HH:MM:SS');
    const code = `${randomUniqueDigits}|${expire}|${randomUniqueDigits}`;
    return code
}

const hashPassowrd = (password) => {   
    return new Promise((resolve, reject) => {
    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
                return reject(err);
            }
            return resolve(hash);
        });
    });
    })                 
}

module.exports = {
    generateVerificationCode,
    hashPassowrd
}