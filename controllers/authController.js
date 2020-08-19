const signup_get = (req, res) => {
    res.render("signup")
}

const login_get = (req,res) => {
    res.render('login')
}

const signup_post = (req, res)=> {
    res.send("new signup")
}

const signup_get = (req, res) => {
    res.render('signup')
}


module.exports = {
    recipe_index,
    recipe_show,
    recipe_store,
    recipe_update,
    recipe_destroy

}