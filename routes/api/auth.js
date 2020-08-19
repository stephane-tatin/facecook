const express = require("express")
const router = express.Router()

const { user_index, user_show, user_store, user_update, user_destroy } = require("../../controllers/recipeController")

// route GET api/recipes
// get all the recipes, @desc by creation date
// @ access public then private
router.get("/signup", user_index)


// route GET api/recipes
// get all the recipes, @desc by creation date
// @ access public then private
router.get("/login", user )

// route POST api/recipes
// post one recipe, @desc by creation date
// @ access public
router.post("/signup", recipe_store)

// route POST api/recipes
// post one recipe, @desc by creation date
// @ access public
router.post("/login", recipe_store)


// route GET api/recipes
// get all the recipes, @desc by creation date
// @ access public then private
router.get("/logout", recipe_show )

// route Put api/recipes/:id
// look for a recipe and update it
// @ access public then private
router.delete("/:id", recipe_destroy)

module.exports = router