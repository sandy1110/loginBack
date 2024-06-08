'use strict'

//models
const userModel = require('../models/user');
const CustomError = require('../utils/custom-error');

const create = async (req,res)=>{
	try{
		const currentUser = await userModel.findOne({ email: req.body.email})
		if (currentUser) {
			throw new CustomError("UserAlreadyExistsError", 409, "User already exists");
		}

		const user = new userModel({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		});

		await user.save()

		res.status(200).send(user)
	}catch(e){
		if(e.name === "UserAlreadyExistsError"){
			return res.status(e.statusCode).send({
				message: e.message
			})
		} else {
			console.log(e)
			res.status(500).send(e)
		}
	}
}

module.exports = {
	create,
}
