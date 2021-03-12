import {FETCH_PROFILE, LOGIN_USER} from '../actions/types'

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SIGN_UP_USER':
            return state
        case LOGIN_USER:
            return state;
        case FETCH_PROFILE:
            return state;
        case 'UPDATE_USER':
            return state;
        case 'DELETE_USER':
            return state
        default:
            return state;
    }
}


export default userReducer;