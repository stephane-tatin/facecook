const express = require("express")
const router = express.Router()

const { recipe_index, recipe_show, recipe_store, recipe_update, recipe_destroy } = require("../../controllers/recipeController")

// route GET api/recipes
// get all the recipes, @desc by creation date
// @ access public then private
router.get("/", recipe_index)


// route GET api/recipes
// get all the recipes, @desc by creation date
// @ access public then private
router.get("/:id", recipe_show )

// route POST api/recipes
// post one recipe, @desc by creation date
// @ access public
router.post("/", recipe_store)

// route Put api/recipes/:id
// look for a recipe and update it
// @ access public then private
router.put("/:id", recipe_update)

// route Put api/recipes/:id
// look for a recipe and update it
// @ access public then private
router.delete("/:id", recipe_destroy)

module.exports = router