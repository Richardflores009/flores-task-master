export default (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_PROFILE':
            return state;
        case 'LOGIN_USER':
            return state;
        default:
            return state;
    }
}