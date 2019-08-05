const defaultState = {
    counts: 1,
    users: []
}

const myReducer = (state=defaultState, action) => {
    switch (action.type) {    
        case "USERS":
            return {...state, users: action.payload}
        case "INCREMENT":      
            return {...state, counts: action.payload}
        case "DECREMENT":      
            return {...state, counts: action.payload}
        default:
            return 0
    }
};

export default myReducer