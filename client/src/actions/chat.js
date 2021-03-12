import * as api from '../api'

export const createChat = () => async (dispatch) => {
    try {
        const { data } = await api.createChat();

        dispatch({ type: 'CREATE_CHAT', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}

export const fetchChat = () => async (dispatch) => {
    try {
        const { data } = await api.fetchChat();

        dispatch({ type: 'FETCH_ROOM', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}

export const fetchOneChat = () => async (dispatch) => {
    try {
        const { data } = await api.fetchOneChat();

        dispatch({ type: 'FETCH_ONE_CHAT', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}

export const UpdateChat = () => async (dispatch) => {
    try {
        const { data } = await api.UpdateChat();

        dispatch({ type: 'UPDATE_CHAT', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const deleteChat = () => async (dispatch) => {
    try {
        const { data } = await api.deleteChat();

        dispatch({ type: 'DELETE_CHAT', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}