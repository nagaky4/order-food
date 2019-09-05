import axios from 'axios';
import * as types from '../constantTypes/index';

export const _getList = () => {
    return {
        type: types.GET_LIST,
    }
}

export const _addToList = (item) => {
    return {
        type: types.ADD_TO_LIST,
        payload: {
            item: item
        }
    }
}

export const _deleteItem = (id) => {
    return {
        type: types.DELETE_ITEM,
        payload: {
            id: id
        }
    }
}

export const _clearListBooked = () => {
    return {
        type: types.CLEAR_LIST_BOOKED
    }
}

export const _openModal = () => {
    return {
        type: types.OPEN_MODAL
    }
}

export const _closeModal = () => {
    return {
        type: types.CLOSE_MODAL
    }
}


export const _getBill = () => {
    return {
        type: types.GET_BILL
    }
}


export const _addToBill = (item) => {
    return {
        type: types.ADD_TO_BILL,
        payload: {
            item: item
        }
    }
}

export const _clearBill = () => {
    return {
        type: types.CLEAR_BILL
    }
}

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
                console.log('respinse',response);
                dispatch(_loginSuccess(response.data))
            })
            .catch(error => {
                // throw (error);
                console.log(error)
            });
    };
};