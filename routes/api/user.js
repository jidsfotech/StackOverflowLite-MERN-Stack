const  express = require ('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require ('../../config/keys');
const router = express.Router();

// require input validation fuctions
const validateRegisterInput = require('../../validation/validateRegister');
const validateLoginInput = require('../../validation/validateLogin');

// load user model
const  User = require ('../../models/user');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/user/register", (req, res) => {
  console.log("/user/register API was called")

  // Form validation
  console.log("Validating User signup data")
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json({errors});
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        userName: req.body.name,
        email: req.body.email,
        password: req.body.password,
        date: Date.now(),
        
        // to be updated later in future when this user ask a question
        question: [],
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        console.log('hashing passowrd');
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          console.log('saving hasshed password')
          newUser
            .save()
            .then(user => {
              res.json(user);
              console.log('user signup successful');
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/user/login", (req, res) => {
  console.log("/login API  was called")

  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json({errors});
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailError: "Email not found" });
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
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            console.log('user log in successfully')
            //localStorage.setItem({user: payload})
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordError: 'wromg password entered' });
      }
    });
  });
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
