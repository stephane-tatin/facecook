const initState = {
    recipes: [
       {id: 1, title : "cake"},
       {id: 2, title : "stuff"}
    ]
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer;