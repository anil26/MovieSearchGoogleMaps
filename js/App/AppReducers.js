/**
 * Combining all the reducers here and exporting
 */
'use strict'

import { combineReducers, applyMiddleware } from 'redux'


// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import MovieSearchAppReducer from '../MovieSearchApp/MovieSearchAppReducer';
// The initial application state
const initialState = {
   
};




export default combineReducers({
    MovieSearchAppReducer,
    routing: routerReducer
});