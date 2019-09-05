
import * as types from '../constantTypes/index';

var initialState = {
    token: null,
    email: null,
    isAuthenicated: false
};


const userLogin = (state = initialState, action) => {

    switch (action.type) {
        case types.LOGIN_SUCCESS:
            state = { ...action.payload };
            return state;
        default:
            return state;
    }
}

export default userLogin;