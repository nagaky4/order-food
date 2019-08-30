
import * as types from '../constantTypes/index'

var initialState = false;

const isOpenModalReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.OPEN_MODAL:
            state = true;
            return state;
        case types.CLOSE_MODAL:
            state = false;
            return state;
        default:
            return state;
    }
}

export default isOpenModalReducer;