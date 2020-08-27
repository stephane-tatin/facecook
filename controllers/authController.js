const User = require("../models/User")
const bcrypt = require("bcrypt")
const saltR = 10

//handle errors




const handleErrors = (err, res) => {
    let errors = {
        name: "",
        email: "",
        password: ""
    }

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

const login_get = async (req, res) => {



}

const signup_post = async (req, res) => {
    const {
        name,
        email,
        password,
        friends
    } = req.body;

    try {

        await bcrypt.genSalt(saltR, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                let user = User.create({
                    name,
                    email,
                    password: hash,
                    friends
                })
                return user

            });
        });

        res.status(201).json("user created")





    } catch (err) {
        handleErrors(err, res)
    }


}

const login_post = async (req, res) => {

    let user = await User.find({
        email: req.body.email
    })

    const match = await bcrypt.compare(req.body.password, user[0].password, (err, success) => {
        if (err) {
            console.log(err)
        }
        if (success) {
            console.log("correspond")
        } else {
            console.log("not correspond")
        }

    });





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