'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const api = express.Router();
const app = express();
const Joi = require('joi');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const userController = require("./controllers/user.controller");
const loginController = require("./controllers/login.controller");

const Schemas = require("./models/joi");

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');
    res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.header('Allow','GET, POST, PUT, DELETE')
    next();
});

const UsersSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

// create routes 
api.post("/users", Schemas.validateUserSchema, userController.create);
app.post("/login", Schemas.validateLoginSchema, loginController.login);

// inyect router into express (middleware)
app.use(api);

// error handler
app.use(function (err, req, res, next) {
    console.log('error', err);
    if (err.isBoom) {
         return res.status(err.output.statusCode).json(err.output.payload);
    }
});

module.exports= app;
