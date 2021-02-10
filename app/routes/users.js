const express = require('express');
const router = express.Router();
const userController = require("../controllers/users");

// require input validation fuctions
const validateRegisterInput = require('../validations/validateRegister');
const validateLoginInput = require('../validations/validateLogin');



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
router.post("/user/register", (req, res) => {
  // data validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json({ errors });
  }
   new userController().create(req, res);
});

// @route /login
// @desc Login user and return JWT token
// @access Public
router.post("/user/login", (req, res) => {

  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  new userController().login(req, res);
});


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
