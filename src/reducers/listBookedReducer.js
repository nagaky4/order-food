import * as types from '../constantTypes/index'

var initialState = [];

const listBookedReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_TO_LIST:
            const item = action.payload.item;
            let checkExits = false;
            state.forEach(value => {
                if (value.id === item.id) {
                    checkExits = true;
                    value.number += parseInt(item.number);
                    value.price += parseInt(item.price);
                }
            })

            if (!checkExits) {
                state.push(item);
            } else {
                let index = state.findIndex(m => m.id === item.id);
                let num = state[index].number;
                let price = state[index].price;
                let newItem = { ...item, number: num, price: price };
                state.splice(index, 1, newItem);
            }
            return [...state];

        case types.GET_LIST:
            return [...state];
        case types.DELETE_ITEM:
            const id = action.payload.id;
            state = state.filter(value => id !== value.id);
            return [...state];
        default:
            return state;
    }
}

export default listBookedReducer;