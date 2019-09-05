import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import listBookedReducer from './listBookedReducer';
import isOpenModalReducer from './isOpenModalReducer';
import listBillReducer from './listBillReducer';
import userLogin from './userLogin';

export const myReducer = combineReducers({
    listBooked: listBookedReducer,
    isOpenModalReducer: isOpenModalReducer,
    listBillReducer: listBillReducer,
    userLogin: userLogin,
    form: formReducer
});
