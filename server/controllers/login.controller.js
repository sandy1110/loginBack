'use strict'

//models
const userModel = require('../models/user');
const jwt = require('jsonwebtoken');
const CustomError = require('../utils/custom-error');

const login = async (req,res)=>{
	try{
		const user = await userModel.findOne({ email: req.body.email, password: req.body.password })
		if (!user) {
			throw new CustomError("UserNotFound", 401, "Wrong email or password");
		}

		const token = jwt.sign({ id: user._id }, process.env.JSON_TOKEN_SECRET, { expiresIn: '1h' });

		res.status(200).send({
			user,
			token
		})
	}catch(e){
		if(e.name === "UserNotFound"){
			return res.status(e.statusCode).send({
				message: e.message
			})
		}
		console.log(e)
		res.status(500).send(e)
	}
}

module.exports = {
	login,
}
