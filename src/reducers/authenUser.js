
import * as types from '../constantTypes/index';

var initialState = {
    token: null,
    email: null,
    isAuthenicated: false
};


const authenUser = (state = initialState, action) => {

    switch (action.type) {
        case types.LOGIN_SUCCESS:
            state = { ...action.payload };
            return state;
        case types.LOGOUT:
            state = { ...initialState }
            return state;
        default:
            return state;
    }
}

export default authenUser;