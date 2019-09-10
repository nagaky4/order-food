import axios from 'axios';
import * as types from '../constantTypes/index';
/**
 * Login
 */
export const _loginSuccess = (data) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: {
            token: data.idToken,
            email: data.email,
            isAuthenicated: true
        }
    }
}

export const _loginHandle = (authData) => {
    return (dispatch) => {
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAkZDrc49wE0Gic4cN_agqGYK7r7d7nbE`, authData)
            .then(response => {
                dispatch(_loginSuccess(response.data))
            })
            .catch(error => {
                console.log(error)
            });
    };
};

/**
 * Logout
 */

export const _logout = () => {
    return {
        type: types.LOGOUT
    }
}
