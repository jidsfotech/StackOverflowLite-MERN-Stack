const express = require('express');
const router = express.Router();
const userController = require("../controllers/users");
const validationSchema  = require("../validations/validator");
const validate = require("../lib/express-joi-validator");


//Health route
router.get("/", (req, res) => {
  res.json({
    status: "Healthy",
    message: "Stackoverflow-lite Service up and running"
  });
});

// @route /register
// @desc Create  user
// @access Public
router.post(
  "/user/register", 
  validate(validationSchema.userRegistration),
  (req, res) => new userController().create(req, res)
  );

// @route /login
// @desc Login user and return JWT token
// @access Public
router.post(
  "/user/login", 
  /**validate(validationSchema.userLogin ),
  (req, res) => new userController().login(req, res)*/
  (req, res) => console.log(req.body)
);


router.get('/getAll', (req, res) => {
  User.find((error, data) => {
    if (error) {
      return next('error')
    } else {
      res.json(data);
    }
  });
})

module.exports = router;
