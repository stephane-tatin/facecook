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