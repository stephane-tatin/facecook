const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    userId : {
        type:String,
        required : true
    },
    title : {
        type:String,
        required : true
    },
    ingredients : {
        type: Array,
        required : true
    },
    creationDate : {
        type: Date,
        default: Date.now
    },

})

module.exports = Recipe = mongoose.model("recipe", RecipeSchema)