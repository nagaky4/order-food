
import * as types from '../constantTypes/index'

var initialState = false;

const isOpenModalReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.OPEN_MODAL:
            state = true;
            console.log('action ', action);
            console.log('state', state);
            return state;
        case types.CLOSE_MODAL:
            state = false;
            console.log('action ', action);
            console.log('state', state);
            return state;
        default:
            return state;
    }
}

export default isOpenModalReducer;