const Joi = require('joi');

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const UsersSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

function validateUserSchema(req, res, next) {
  const { error } = UsersSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
}

function validateLoginSchema(req, res, next) {
  const { error } = LoginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
}

module.exports = {
  validateLoginSchema,
  validateUserSchema,
}
