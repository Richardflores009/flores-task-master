const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'SIGNUP_USER':
            return [...state, action.payload]
        case 'LOGIN_USER':
            return [...state, action.payload];
        case 'FETCH_PROFILE':
            return action.payload;
        case 'UPDATE_USER':
            return state;
        case 'DELETE_USER':
            return state
        default:
            return state;
    }
}


export default userReducer;