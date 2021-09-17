const express = require('express');
const router = express.Router();
const userController = require("../controllers/users");
const validationSchema = require("../validations/validator");
const validate = require("../lib/express-joi-validator");
const passport = require('passport');


//Health route
router.get("/health", (req, res) => {
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
  validate({ validateBody: validationSchema.userRegistration }),
  (req, res) => new userController().create(req, res)
);

// @route /login
// @desc Login user and return JWT token
// @access Public
router.post(
  "/user/login",
  validate({ validateBody: validationSchema.userLogin }),
  (req, res) => new userController().login(req, res)
);

// @route /user/verify
// @desc verify user account
// @access Public
router.post(
  '/user/verify',
  validate({ validateQuery: validationSchema.userVerification }),
  (req, res) => new userController().verifyUserAccount(req, res)
),

  // @route user/verify/retry
  // @desc retry user account verification
  // @access Public
  router.post(
    '/user/retry_verify',
    validate({ validateBody: validationSchema.retryUserVerification }),
    (req, res) => new userController().retryUserAccountVerification(req, res)
  )


// @route user/update
// @desc update user data
// @access Public
router.post(
  '/user/update',
  validate({
    validateBody: validationSchema.updateUser,
    validateQuery: validationSchema.updateUserParams
  }),
  passport.authenticate('jwt', { session: false }),
  (req, res) => new userController().updateUserAccount(req, res)
)

// @route user/updatePassword
// @desc update user passoword
// @access Public
router.post(
  '/user/update_password',
  validate({
    validateBody: validationSchema.updatePassword,
  }),
  (req, res) => new userController().updatePassword(req, res)
)

// @route user/reset_password
// @desc update user passoword
// @access Public
router.post(
  '/user/reset_password',
  validate({
    validateBody: validationSchema.retryUserVerification,
  }),
  (req, res) => new userController().resetPassword(req, res)
)

module.exports = router;
