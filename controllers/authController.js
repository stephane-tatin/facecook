const User = require("../models/User")

//handle errors




const handleErrors = (err, res) => {
    let errors = {
        name: "",
        email: "",
        password: ""
    }

    console.log(err.code)

    //duplicate error code
    if (err.code = 11000) {
        errors.email = "email already registered"
        res.status(400).json({
            errors
        })
    }

    Object.values(
        err.errors).forEach(error => {
        errors[error.properties.path] = error.properties.message
    })

    res.status(400).json({
        errors
    })

}

const signup_get = (req, res) => {
    res.send("signup")
}

const login_get = (req, res) => {
    res.send('login')
}

const signup_post = async (req, res) => {
    const {
        name,
        email,
        password,
        friends
    } = req.body;

    try {

        await User.create({
            name,
            email,
            password,
            friends
        })
        res.status(201).json("user created")

    } catch (err) {
        handleErrors(err, res)
    }


}

const login_post = (req, res) => {
    User.findById(req.params.id)

}

const logout_get = (req, res) => {
    res.send('logout')
}


module.exports = {
    signup_get,
    login_get,
    signup_post,
    login_post,
    logout_get
}