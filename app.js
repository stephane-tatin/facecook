const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
const multer = require("multer")

const {
    result
} = require("lodash")
const Recipe = require("./models/Recipe")

const recipes = require("./routes/api/recipes")
const auth = require("./routes/api/auth")
const images = require("./routes/api/images")


// Express app
const app = express()
app.use(express.json());
app.use(cors())




const DBOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const DB = "mongodb+srv://stef:stefpass@journalapp-a5pnu.mongodb.net/Facecook-app?retryWrites=true&w=majority"

const port = 5000

mongoose.set("useCreateIndex", true);
mongoose.connect(DB, DBOption)
    .then(() => app.listen(port), console.log(`Connected to DB, listening to port ${port}`))
    .catch((err) => {
        console.log("err", err)
    })

//Middleware & static files
app.use(express.static("public"))
app.use(morgan("dev"))


app.use("/api/recipes", recipes)
app.use("/api/auth", auth)
app.use("/api/images", images)




