const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: [true, "please enter a title for your recipe"]
    },
    presentation: {
        type: String,
        required: [true, "please enter a small presentation of your recipe"]
    },
    steps: {
        type: Array,
        required: [true, "a recipe needs at least one step"]
    },
    ingredients: {
        type: Array,
        required: [true, "a recipe needs at least one ingredient"]
    },
    creationDate: {
        type: Date,
        default: Date.now
    },

})

RecipeSchema.pre('save', (next) => {
    console.log("a recipe is about was saved", this)
    console.log(this.password)
    next()
})

RecipeSchema.post('save', (doc, next) => {
    console.log("a recipe was saved", doc)
    next()
})

module.exports = Recipe = mongoose.model("recipe", RecipeSchema)