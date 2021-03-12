import * as api from '../api'

export const loginUser = () => async (dispatch) => {
    try {
        const { data } = await api.loginUser();

        dispatch({ type: 'LOGIN_USER', payload: data})
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