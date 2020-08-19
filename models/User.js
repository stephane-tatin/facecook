const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type:String,
        required : true
    },
    email : {
        type:String,
        required : true
    },
    password : {
        type:String,
        required : true
    },
    friends : {
        type: Array,
        required : true
    },
    creationDate : {
        type: Date,
        default: Date.now
    },

})

module.exports = Recipe = mongoose.model("recipe", RecipeSchema)