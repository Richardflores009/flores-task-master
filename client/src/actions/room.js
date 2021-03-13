import * as api from '../api'

export const createRoom = () => async (dispatch) => {
    try {
        const { data } = await api.createRoom();

        dispatch({ type: 'LOGIN_USER', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const fetchRoom = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRoom();
        console.log(data)
        
        dispatch({ type: 'FETCH_MY_ROOMS', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const fetchOneRoom = () => async (dispatch) => {
    try {
        const { data } = await api.fetchOneRoom();
        console.log(data)


        dispatch({ type: 'FETCH_ONE_ROOMS', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const UpdateRoom = () => async (dispatch) => {
    try {
        const { data } = await api.UpdateRoom();

        dispatch({ type: 'UPDATE_ROOM', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const deleteRoom = () => async (dispatch) => {
    try {
        const { data } = await api.deleteRoom();

        dispatch({ type: 'DELETE_ROOM', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}