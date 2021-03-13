

const roomReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_ROOM':
            return state
        case 'FETCH_ONE_ROOM':
            return action.payload
        case 'FETCH_MY_ROOMS':
            return action.payload
        case 'UPDATE_ROOM':
            return state
        case 'DELETE_ROOM':
            return state
        default:
            return state
    }
}

export default roomReducer;

