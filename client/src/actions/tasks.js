import * as api from '../api'

export const createTask = () => async (dispatch) => {
    try {
        const { data } = await api.createTask();

        dispatch({ type: 'CREATE_TASK', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const fetchTask = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTask();

        dispatch({ type: 'FETCH_TASK', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const fetchOneTask = () => async (dispatch) => {
    try {
        const { data } = await api.fetchOneTask();

        dispatch({ type: 'FETCH_ONE_TASK', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const updateTask = () => async (dispatch) => {
    try {
        const { data } = await api.updateTask();

        dispatch({ type: 'UPDATE_TASK', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const deleteTask = () => async (dispatch) => {
    try {
        const { data } = await api.deleteTask();

        dispatch({ type: 'DELETE_TASK', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}