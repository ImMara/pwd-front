import * as reducer from './reducers/reducer';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

const appReducer = combineReducers(reducer)
const store = createStore(appReducer);

export default store;