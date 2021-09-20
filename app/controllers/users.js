const httpStatus = require("http-status");
const userService = require("../services/users");

class Users {
    constructor() { }

    /**
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async create(req, res) {
        return await new userService().create(req.body)
            .then((response) => {
                return res.send(
                    httpStatus.CREATED,
                    {
                        message: "User created sucssfully",
                        data: response
                    }
                )
            })
            .catch((error) => {
                res.send(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    error
                )
            });
    }

    /**
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async login(req, res) {
        return await new userService().login(req.body)
            .then((response) => {
                return res.send(
                    httpStatus.OK,
                    {
                        message: "user logged in successfully",
                        token: response
                    }
                )
            })
            .catch((error) => {
                if (!error.isVerified) {
                    res.send({
                        status: httpStatus.INTERNAL_SERVER_ERROR,
                        user_not_verified: error
                    })
                }
                res.send({
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                    error: error
                })
            })
    }


    /**
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async verifyUserAccount(req, res) {
        return await new userService().verifyUserAccount(req.query)
            .then((response) => {
                return res.send(
                    httpStatus.OK,
                    {
                        message: "user verified successfuly",
                        status: response
                    }
                )
            })
            .catch((error) => {
                res.send({
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                    error: error
                })
            })
    }


    /**
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async retryUserAccountVerification(req, res) {
        const email = req.body.email;
        return await new userService().retryUserAccountVerification(email)
            .then((response) => {
                return res.send(
                    httpStatus.OK,
                    response
                )
            })
            .catch((error) => {
                res.send({
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                    error: error
                })
            })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async updateUserAccount(req, res) {
        const payload = {
            userId: req.user._id,
            data: req.body
        };
        return await new userService().updateUserAccount(payload)
            .then((response) => {
                return res.send(
                    httpStatus.OK,
                    response
                )
            })
            .catch((error) => {
                res.send({
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                    error: error
                })
            })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async updatePassword(req, res) {
        const payload = {
            code: req.body.code,
            data: {
                email: req.body.email,
                newPassword: req.body.newPassword
            }
        }
        return await new userService().updatePassword(payload)
            .then((response) => {
                return res.send(
                    httpStatus.OK,
                    response
                )
            })
            .catch((error) => {
                res.send({
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                    error: error
                })
            })
    }

    async resetPassword(req, res) {
        console.log(req.body.email)
        return await new userService().resetPassword(req.body.email)
            .then((response) => {
                return res.send(
                    httpStatus.OK,
                    response
                )
            })
            .catch((error) => {
                console.log(error)
                res.send({
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                    error: error
                })
            })
    }
}

module.exports = Users;
