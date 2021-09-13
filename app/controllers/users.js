const httpStatus = require("http-status");
const userService = require("../services/users");

class Users {
    constructor() { }

    /**
     * Endpoint to create a User
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
  * Login endpoint
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
                res.send({
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                    error: error
                })
            })
    }
}

module.exports = Users;
