const express = require("express")
const router = express.Router()

const { image_store } = require("../../controllers/imageController")



// route POST api/recipes
// post one recipe, @desc by creation date
// @ access public
router.post("/", image_store)



module.exports = router