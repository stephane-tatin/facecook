const Recipe = require("../models/Recipe")



const recipe_index = (req, res) => {

    Recipe.find()
        .sort({
            date: -1
        })
        .then(recipes => {
            res.json(recipes)
        }).catch(err => console.log(err))
}

const recipe_show = (req, res) => {

    Recipe.findById(req.params.id)
        .then(recipe => {
            res.json(recipe)
        }).catch(err => console.log(err))
}

const recipe_store = async (req, res) => {

   
    const {
        file,
        presentation,
        title,
        userId,
        ingredients,
        steps
    } = req.body

    console.log(file)
    console.log(title)
    try {

        const recipe = await Recipe.create({
            presentation,
            title,
            userId,
            ingredients,
            steps
        });
        res.status(201).json(recipe);
    } catch (err) {

        console.log(err)
    }

}

const recipe_update = (req, res) => {

    const updatedRecipe = {
        title: req.body.title,
        userId: req.body.userId,
        ingredients: req.body.ingredients
    }
    Recipe.findOneAndUpdate(req.params.id, updatedRecipe, {
            useFindAndModify: false
        })
        .then((doc) => res.json(doc))
        .catch(err => console.log(err))
}

const recipe_destroy = (req, res) => {

    Recipe.findByIdAndDelete(req.params.id)
        .then((doc) => res.json(doc))
        .catch(err => console.log(err))
}



module.exports = {
    recipe_index,
    recipe_show,
    recipe_store,
    recipe_update,
    recipe_destroy

}