'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    },
},
{ usePushEach: true })

module.exports = mongoose.model('users', UserSchema)