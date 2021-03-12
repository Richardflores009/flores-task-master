import * as api from '../api'

export const signupUser = () => async (dispatch) => {
    try {
        const { data } = await api.signupUser();

        dispatch({ type: 'SIGNUP_USER', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const loginUser = () => async (dispatch) => {
    try {
        const { data } = await api.loginUser();

        dispatch({ type: 'LOGIN_USER', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const logoutUser = () => async (dispatch) => {
    try {
        const { data } = await api.logoutUser();

        dispatch({ type: 'LOGOUT_USER', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const logoutAllUser = () => async (dispatch) => {
    try {
        const { data } = await api.logoutAllUser();

        dispatch({ type: 'LOGOUT_ALL_USER', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const fetchProfile = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProfile();

        dispatch({ type: 'FETCH_PROFILE', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const findUser = () => async (dispatch) => {
    try {
        const { data } = await api.findUser();

        dispatch({ type: 'FIND_USER', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const updateUser = () => async (dispatch) => {
    try {
        const { data } = await api.updateUser();

        dispatch({ type: 'UPDATE_USER', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const addFriend = () => async (dispatch) => {
    try {
        const { data } = await api.addFriend();

        dispatch({ type: 'ADD_FRIEND', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}
export const DeleteFriend = () => async (dispatch) => {
    try {
        const { data } = await api.DeleteFriend();

        dispatch({ type: 'DELETE_USER', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}