import axios from "axios"


export const recipesIndex = () => (dispatch) => {
    axios.get("http://localhost:5000/api/recipes")
    .then(res => 
        dispatch({
            type: "RECIPE_INDEX",
            payload : res.data
        }))
        .catch(err => console.log(err))
}

export const recipeShow = (recipe) => (dispatch => {
        dispatch({
            type: "RECIPE_SHOW",
            payload : recipe
        })
    })

export const recipeStore = (recipe) => (dispatch) => {
    console.log(recipe)   
    axios.post("http://localhost:5000/api/recipes", recipe)
        .then(res => 
            dispatch({
                type: "RECIPE_STORE",
                payload : res.data
            }))
            .catch(err => console.log(err))
}

export const imageRecipeStore = (imageRecipe) => (dispatch) => {
      
    console.log("image recipe Store")
    
    const config = {
        headers: {
            "content-type" : "multipart/form-data"
        }
    }
    
    axios.post("http://localhost:5000/api/recipes", imageRecipe, config)
        .then(res => 
            dispatch({
                type: "IMAGE_RECIPE_STORE",
                payload : res.data
            }))
            .catch(err => console.log(err))
}