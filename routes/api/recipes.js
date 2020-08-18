const express = require("express")
const router = express.Router()
const Recipe = require("../../models/Recipe")

// route GET api/recipes
// get all the recipes, @desc by creation date
// @ access public then private

router.get("/", (req, res) => {
    Recipe.find()
        .sort({date:-1})
        .then(recipes => {
            res.json(recipes)
        })
})

// route POST api/recipes
// post one recipe, @desc by creation date
// @ access public

router.post("/", (req, res) => {
         
    const recipe = new Recipe({
        title: "pizza",
        userId : 25,
        ingredients : [
            {"tomatoes" : "500"},
            {"mozza" : "5"},
            {"olives" :"10"}
        ]
    }) 

    recipe.save()
})

module.exports = router