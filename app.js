const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const { result } = require("lodash")
const Recipe = require("./models/Recipe")

const recipes = require("./routes/api/recipes")

// Express app
const app = express()

//register view engine
app.set("view engine", "ejs")




const DBOption = {
    useNewUrlParser : true,
    useUnifiedTopology: true
}

const port = 3000

mongoose.set("useCreateIndex", true);
mongoose.connect(DB, DBOption)
    .then((result) => app.listen(port), console.log(`Connected to DB, listening to port ${port}`))    
    .catch((err) => { console.log("err", err)})

//Middleware & static files
app.use(express.static("public"))
app.use(morgan("dev"))


app.use("/api/recipes", recipes)

app.get("/add-recipe", (req, res) => {
  const recipe = new Recipe({
      title: "pizza",
      userId : 25,
      ingredients : [
          {"tomatoes" : "500"},
          {"mozza" : "5"},
          {"olives" :"10"}
      ]
  }) 
}) 

  app.get("/all-recipes", (req, res) => {
   
    Recipe.find()
  .then((result) => {
    res.send(result)   
  }).catch((err) => {
      console.log(err)
  })
})

app.get("/", (req, res) => {   
    const blogs = [
        {title : "Yosh finds eggs", snippet : "Lorem ispum dolor sit amet consectur"},
        {title : "Mario finds stars", snippet : "Velit ipsum aute sit in."},
        {title : "How to defeat Bowser", snippet : "Minim consequat veniam laboris Lorem sit nulla et elit sunt Lorem qui aliquip."}
    ] 
    //res.send("<p>Some html</p>")
    res.render("index", { title : "Home", blogs})
})

app.get("/about", (req, res) => {    
    res.render("about", { title : "About"})
})

app.get("/blogs/create", (req, res) => {
    res.render("create", { title : "Create a new blog"})
})

 app.use((req, res) => {
    res.status(404).render("404", { title : "404"})
})


