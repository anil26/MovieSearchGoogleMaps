/**
 *
 * app.js
 *
 * This is the entry file for the application
 *
*/
import FilmLocationSearchComponent from '../MovieSearchApp/Containers/FilmSearchContainer/FilmSearchComponent';
import AppComponent from '../CommonComponent/app.js';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';



console.log("current href",window.location.href);

const getAppRouter = () => {
		return (
			<Route component={AppComponent}>
				<Route component={FilmLocationSearchComponent} path='/searchmovies' />
			</Route>
		);
	
}


export {
	getAppRouter
}





