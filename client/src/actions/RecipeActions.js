import axios from "axios"


export const recipesIndex = () => (dispatch) => {
    axios.get("localhost:3001/api/recipes")
    .then(res => 
        dispatch({
            type: "RECIPE_INDEX",
            payload : res.data
        }))
        .catch(err => console.log(err))
}