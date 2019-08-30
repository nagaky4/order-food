import { combineReducers } from 'redux';

import listBookedReducer from './listBookedReducer';
import isOpenModalReducer from './isOpenModalReducer';
import listBillReducer from './listBillReducer';

export const myReducer = combineReducers({
    listBooked: listBookedReducer,
    isOpenModalReducer: isOpenModalReducer,
    listBillReducer: listBillReducer

});
