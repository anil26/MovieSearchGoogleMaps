/**
 *
 * app.js
 *
 * This is the entry file for the application
 *
*/



// Import all the third party stuff
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Appreducers from './App/AppReducers';
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux'
import {getAppRouter} from './Routes/AppRouter';

// Import the components used as pages

//importing bootstrap css 

import 'bootstrap/dist/css/bootstrap.css';
// Import the CSS file, which webpack transfers to the build folder
import '../css/main.css';

// Creates the Redux reducer with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(Appreducers);
const history = syncHistoryWithStore(browserHistory, store);


history.listen((location) =>{
	console.log("path changed");
});

ReactDOM.render(
	<Provider store={store}> 
		<Router history={history}>
			{getAppRouter()}
		</Router>
	</Provider>,
  document.getElementById('app')
);

