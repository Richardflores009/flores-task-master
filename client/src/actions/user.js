import * as api from '../api'

export const loginUser = () => async (dispatch) => {
    try {
        const { data } = await api.loginUser();

        dispatch({ type: 'LOGIN_USER', payload: data})
    } catch(e) {
        console.log(e.message)
    }
    
}