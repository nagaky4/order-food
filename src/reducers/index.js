import { combineReducers } from 'redux';

import listBooked from './listBooked';

export const myReducer = combineReducers({
    listBooked: listBooked
});
