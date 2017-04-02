/**
 * Combining all the reducers here and exporting
 */
'use strict'

import { combineReducers, applyMiddleware } from 'redux'
import MovieSearchReducer from './Containers/FilmSearchContainer/FilmSearchReducer';
const assign = Object.assign || require('object.assign');
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


// The initial application state


export default combineReducers({
	MovieSearchReducer,
    routing: routerReducer
});