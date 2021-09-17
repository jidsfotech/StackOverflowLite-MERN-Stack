
var Joi = require('joi');

module.exports = function (schema) {
  return async function (req, res, next) {

    if (schema) {

      var validation;
      // Validate req.params
      if (Object.keys(req.params).length !== 0 && schema.hasOwnProperty("validateParms")) {
        //validation = joi.validate(req.params || {}, schema)
        validation = await schema.validateParms.validate(req.params);

        if (validation.error) {
          return res.status(400).send({ status: validation.error.name, errors: validation.error.details, majeed: "im throwing the error" });
        }

        // Set defaults
        req.params = validation.value;

      }

      // Validate req.body
      if (Object.keys(req.body).length !== 0 && schema.hasOwnProperty("validateBody")) {
        validation = await schema.validateBody.validate(req.body);
        // validation = Joi.validate(req.body || {}, schema); 

        if (validation.error) {
          return res.status(400).send({ status: validation.error.name, errors: validation.error.details });
        }

        // Set defaults
        req.body = validation.value;
      }

      // Validate req.query
      if (Object.keys(req.query).length !== 0 && schema.hasOwnProperty("validateQuery")) {
        validation = await schema.validateQuery.validate(req.query);
        //validation = joi.validate(req.query || {}, req.route.validations.query);

        if (validation.error) {
          return res.status(400).send(400, { status: validation.error.name, errors: validation.error.details });
        }

        // Set defaults
        req.query = validation.value;
      }
    }

    next();
  };
};