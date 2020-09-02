const initialState = {
    recipes : [],
    loading : false,
    loaded : false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case "RECIPE_INDEX": 
        return {
            ...state,
            recipes : action.payload,
            loading: false,
            loaded: true
        }
        default:
            return state
    }
}