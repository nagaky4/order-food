import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import listBookedReducer from './listBookedReducer';
import isOpenModalReducer from './isOpenModalReducer';
import listBillReducer from './listBillReducer';
import authenUser from './authenUser';

export const myReducer = combineReducers({
    listBooked: listBookedReducer,
    isOpenModalReducer: isOpenModalReducer,
    listBillReducer: listBillReducer,
    authenUser: authenUser,
    form: formReducer
});
