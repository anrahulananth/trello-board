import { combineReducers } from 'redux';
import listReducer from './listReducer';
import listItemsReducer from './listItemsReducer';

export default combineReducers({
    lists: listReducer,
    listItems: listItemsReducer
});