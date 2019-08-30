import * as types from '../constantTypes/index'

var initialState = [];

const listBillReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_TO_BILL:
            const item = action.payload.item;
            state.push(item);
            return [...state];
        case types.GET_BILL:
            return [...state];
        case types.CLEAR_BILL:
            state = [];
            return [...state];
        default:
            return state;
    }
}

export default listBillReducer;