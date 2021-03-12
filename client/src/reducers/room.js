

const roomReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_ROOM':
            return state
        case 'FETCH_ROOM':
            return state
        case 'FETCH_MY_ROOMS':
            return state
        case 'UPDATE_ROOM':
            return state
        case 'DELETE_ROOM':
            return state
        default:
            return state
    }
}

export default roomReducer;

