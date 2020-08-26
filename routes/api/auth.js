const express = require("express")
const router = express.Router()

const {
    signup_get,
    signup_post,
    login_get,
    logout_get,
    login_post
} = require("../../controllers/authController")

// route GET api/auth
// get all the recipes, @desc by creation date
// @ access public then private
router.get("/signup", signup_get)


// route GET api/recipes
// get all the recipes, @desc by creation date
// @ access public then private
router.get("/login", login_get)

// route POST api/recipes
// post one recipe, @desc by creation date
// @ access public
router.post("/signup", signup_post)

// route POST api/recipes
// post one recipe, @desc by creation date
// @ access public
router.post("/login", login_post)


// route GET api/recipes
// get all the recipes, @desc by creation date
// @ access public then private
router.get("/logout", logout_get)


module.exports = router