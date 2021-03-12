

const chatReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_MESSAGE':
            return state
        case 'FETCH_ONE_MESSAGE':
            return state
        case 'FETCH_MESSAGES':
            return state
        case 'UPDATE_MESSAGE':
            return state
        case 'DELETE_MESSAGE':
            return state
        default: 
            return state
    }
}


export default chatReducer;