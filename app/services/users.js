const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const UserModel = require('../models/users');

class User {
    constructor() {

    }

    async create(payload) {
        return new Promise(async (resolve, reject) => {
            UserModel.findOne({ email: payload.email }).then(user => {
                if (user) {
                    return reject({ 
                        status: false,
                        message: "Email already exists",
                    });
                } else {
                    const newUser = new UserModel({
                        userName: payload.name,
                        email: payload.email,
                        password: payload.password,
                        date: Date.now(),

                        // to be updated later in future when this user ask a question
                        question: [],
                    });

                    // Hash password before saving in database
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    return resolve({
                                        loginData: [user.userName, user.email],
                                    })
                                })
                                .catch( (err) => {
                                    return reject({
                                        status: false,
                                        message: err,
                                    });
                                });
                        });
                    });
                }
            });
        })
    }

    async login(payload) {
        return new Promise(async (resolve, reject) => {
            const { email, password } = payload;
            // Find user by email
            UserModel.findOne({ email }).then(user => {
                // Check if user exists
                if (!user) {
                    return reject ({
                        status: false,
                        message: "Email not found"
                    })
                }
                // Check password
                bcrypt.compare(password, user.password).then(isMatch => {
                    if (isMatch) {
                        // If User matched create a JWT Payload
                        const payload = {
                            id: user.id,
                            name: user.userName
                        };
                        // generate a Sign token
                        jwt.sign(
                            payload,
                            config.secretOrKey,
                            {
                                expiresIn: 31556926 // 1 year in seconds
                            },
                            (err, token) => {
                                //localStorage.setItem({user: payload})
                                return resolve({
                                    status: "Successfull",
                                    token: "Bearer " + token
                                });
                            }
                        );
                    } else {
                        return reject({ 
                            status: "false",
                            message: "wromg password entered" });
                    }
                });
            });
        });

    }
}

module.exports = User;