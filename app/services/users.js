const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const UserModel = require('../models/users');
const moment = require('moment');
const utils = require("../lib/utils");

class User {
    constructor() {

    }
    /**
     * create a user account 
     * @param {*} payload 
     * @returns 
     */
    async create(payload) {
        return new Promise(async (resolve, reject) => {
            UserModel.findOne({ email: payload.email }).then(user => {
                if (user) {
                    return reject({
                        status: false,
                        message: "Email already exists",
                    });
                } else {
                    const code = utils.generateVerificationCode();
                    const newUser = new UserModel({
                        username: payload.username,
                        email: payload.email,
                        password: payload.password,
                        created_on: Date.now(),
                        isVerified: false,
                        verificationCode: code,

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
                                    /**
                                     * send email verification link to user here
                                     * **************************************
                                     * ****************************************
                                     */
                                    return resolve({
                                        user: user,
                                    })
                                })
                                .catch((err) => {
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
    };

    /**
     * login user
     * @param {*} payload 
     * @returns 
     */
    async login(payload) {
        return new Promise(async (resolve, reject) => {
            const { email, password } = payload;
            // Find user by email
            UserModel.findOne({ email }).then(user => {
                // Check if user exists
                if (!user) {
                    return reject({
                        status: false,
                        message: "Email not found"
                    })
                }

                //if user already exist but not yet verified, resend a new verification token 
                if (user && !user.isVerified) {
                    //send a new verification code the user 
                    this.retryUserAccountVerification(user.email)
                        .then(code => {
                            code.isVerified = false;
                            return reject(code);
                        })
                } else {
                    // Check password
                    bcrypt.compare(password, user.password)
                        .then(isMatch => {
                            if (!isMatch) {
                                return reject({
                                    status: "false",
                                    message: "wromg password entered"
                                });
                            }
                            // If User matched create a JWT Payload
                            const payload = {
                                id: user.id,
                                name: user.userName
                            };
                            // generate a Signed token
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
                        });
                }
            });
        });

    };

    /**
     * verify user account 
     * @param {*} payload 
     * @returns 
     */
    async verifyUserAccount(payload) {
        return new Promise(async (resolve, reject) => {
            const { code, userId } = payload;
            await UserModel.findById(userId)
                .then(async (user) => {
                    if (!user) {
                        // if no user id matchs the query parameter reject
                        return reject("User does not exist");
                    }
                    //extract verification code from user object and check if it's still valid 
                    const expiryDate = user.verificationCode.split("|")[1];
                    const currentTime = moment(new Date()).format("YYYY-MM-DD HH:MM:SS");
                    if (!user.isVerified && user.verificationCode !== code || moment(expiryDate).isBefore(currentTime)) {
                        //send a new verification code to the user 
                        this.retryUserAccountVerification(user.email)
                            .then(code => {
                                code.isVerified = false;
                                return reject(code);
                            })
                    }

                    //verify user if not already verified  
                    else if (!user.isVerified) {
                        await UserModel.updateOne({ _id: userId }, { isVerified: true })
                            .then((res) => {
                                /**send email notification to suer after verification 
                                    /**send email notification to suer after verification 
                                /**send email notification to suer after verification 
                                 * *****************************
                                 * *****************************
                                 */
                                return resolve(res)
                            })
                            .catch((error) => {
                                return reject(error)
                            })
                    }
                    else {
                        return reject("User already verified proceed to login")
                    }
                })
                .catch(error => {
                    reject({
                        Message: "Error occured while searching for user",
                        Error: error
                    })
                })
        });
    };

    /**
     * retry user account verification
     * @param {*} email 
     * @returns 
     */
    async retryUserAccountVerification(email) {
        return new Promise(async (resolve, reject) => {
            const code = utils.generateVerificationCode();
            await UserModel.findOne({ email })
                .then(async (user) => {
                    if (user) {
                        await UserModel.updateOne({ email: email }, { verificationCode: code })
                            .then((res) => {
                                //send a new verification link to the user
                                /** send email verification link to user here
                                 * *********************************************
                                 * -*********************************************
                                 */
                                return resolve({ Message: "new verification link sent to your email", code });
                            })
                            .catch((error) => {
                                return reject(error)
                            })
                    }

                    // if no user id matchs the query parameter reject
                    return reject("User does not exist");
                })
            /**.catch(error => {
                reject({
                    Message: "Error occured while searching for a user",
                    Error: error
                })
            })*/
        });
    };

    /**
     *  update user account 
     * @param {*} payload 
     * @returns 
     */
    async updateUserAccount(payload) {
        return new Promise(async (resolve, reject) => {
            const { userId, data } = payload;
            const { oldPassword, newPassword } = data;

            if (newPassword && !oldPassword || oldPassword && !newPassword) {
                return reject({ message: 'To update your password, please provide your old password and the new password' });
            }

            await UserModel.findById(userId)
                .then(async (user) => {

                    if (!user) {
                        return reject("User not found")
                    }

                    if (oldPassword && newPassword) {
                        if (oldPassword === newPassword) {
                            return reject({ message: 'The new passowrd and old password are the same' });
                        }
                        bcrypt.compare(oldPassword, user.password)
                            .then(async (isMatch) => {
                                if (!isMatch) {
                                    return reject("wrong old password")
                                }
                                delete data.oldPassword;
                                data.password = data.newPassword; delete data.oldPassword;
                                delete data.newPassword;
                            })
                            .catch((error) => {
                                return reject({
                                    Message: "bcrypt:: error occuredwhen comparing password",
                                    Error: error
                                })
                            })
                    }
                    await UserModel.updateOne({ _id: userId }, data)
                        .then((user) => {
                            /**
                             * send email notification after succesfull update here 
                             * *************************************************
                             * ************************************************
                             */
                            return resolve({
                                status: "User data successfully updated",
                                user: user
                            })
                        })
                        .catch((error) => {
                            return reject({
                                status: "Fail to update user data",
                                Error: error
                            })
                        });
                })
        })
    }

    async updatePassword(payload) {
        return new Promise(async (resolve, reject) => {
            const { code, data } = payload;
            const { email, newPassword } = data;

            await UserModel.findOne({ email })
                .then(async (user) => {
                    if (!user) {
                        return reject("User not found")
                    }

                    //extract verification code from user object and check if it's still valid 
                    const expiryDate = user.verificationCode.split("|")[1];
                    const currentTime = moment(new Date()).format("YYYY-MM-DD HH:MM:SS");
                    if (user.verificationCode !== code || moment(expiryDate).isBefore(currentTime)) {

                        // Resend a new password reset link to user if old link expires
                        this.resetPassword(email);
                        return reject({
                            Message: "Password reset code has expired, a new reset link has been sent to you",
                        });
                    }

                    //check if user is verified before passowrd update 
                    if (!user.isVerified) {
                        //send a new verification code to the user 
                        this.retryUserAccountVerification(email);
                        return resolve("Account not verified, a verification link has been sent to this email")
                    }

                    //Hash password before saving
                    const password = await utils.hashPassowrd(newPassword);
                    console.log(password, "service")
                    await UserModel.updateOne({ _id: user._id }, { password: password })
                        .then((res) => {
                            /**
                             * send email notification to user after successfull password update
                             */
                            return resolve({
                                Message: "Password updated successfully",
                                res
                            })
                        })
                        .catch((error) => {
                            /**
                             * send failed password notification to user
                             */
                            return reject({
                                Status: "failed to update password",
                                Error: error
                            })
                        });
                });
        })
    }

    async resetPassword(email) {
        return new Promise(async (resolve, reject) => {
            const code = utils.generateVerificationCode();
            await UserModel.findOne({ email })
                .then(async (user) => {
                    if (user) {
                        await UserModel.updateOne({ email: email }, { verificationCode: code })
                            .then((res) => {
                                //send reset link to the user
                                /** send password reset link to user here
                                 * *********************************************
                                 * -*********************************************
                                 */
                                return resolve({ Message: "a password reset link has been sent to your email", code, email });
                            })
                        /** .catch((error) => {
                            return reject(error)
                        })*/
                    }

                    // if no user id matchs the query parameter reject
                    return reject("Enail does not exist");
                })
                .catch(error => {
                    reject({
                        Message: "Error occured while searching for user with email " + email,
                        Error: error
                    })
                })
        });
    };

}



module.exports = User;