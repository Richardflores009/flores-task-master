

const taskReducer = (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_TASK':
            return state
        case 'FETCH_ONE_TASK':
            return state
        case 'FETCH_ALL_TASKS':
            return state
        case 'UPDATE_TASK':
            return state
        case 'DELETE_TASK':
            return state
        default:
            return state
    }
}

export default taskReducer;