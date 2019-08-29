import { combineReducers } from 'redux';

import listBookedReducer from './listBookedReducer';
import isOpenModalReducer from './isOpenModalReducer';

export const myReducer = combineReducers({
    listBooked: listBookedReducer,
    isOpenModalReducer: isOpenModalReducer
});
