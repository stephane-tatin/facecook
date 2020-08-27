const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const validator = require("validator")
const bcrypt = require("bcrypt")

const salt = 10

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "please enter your name"]
    },
    email: {
        type: String,
        required: [true, "please enter a email"],
        unique: true,
        validate: [validator.isEmail, "please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "please enter a password"],
        minlength: [6, "the password must contain at least 6 characters"]
    },
    friends: {
        type: Array,
        required: false,
    },
    creationDate: {
        type: Date,
        default: Date.now
    },

})


module.exports = User = mongoose.model("user", UserSchema)