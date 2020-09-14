const initialState = {
    recipes : [],
    loading : false,
    loaded : false,
    singleRecipe: null,
    image : null
}

export default function (state = initialState, action) {
    switch(action.type) {
        case "RECIPE_INDEX": 
        return {
            ...state,
            recipes : action.payload,
            loading: false,
            loaded: true,
            singleRecipe : null
        }
        case "RECIPE_SHOW": 
        return {
            ...state,
            loading: true,
            loaded: true,
            singleRecipe : action.payload
        }
        case "RECIPE_STORE": 
        return {
            ...state,
            singleRecipe : null
            }
        case "IMAGE_RECIPE_STORE": 
        return {
            ...state,
            image : null
        }
        default:
            return state
    }
}