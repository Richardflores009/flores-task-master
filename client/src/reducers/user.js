import {FETCH_PROFILE, LOGIN_USER} from '../actions/types'

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_PROFILE:
            return state;
        case LOGIN_USER:
            return state;
        default:
            return state;
    }
}


export default userReducer;