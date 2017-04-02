/*
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 * 3) (optional) Add an async function like this:
 *    export function asyncYourAction(var) {
 *        return function(dispatch) {
 *             // Do async stuff here
 *             return dispatch(yourAction(var));
 *        }
 *    }
 *
 *    If you add an async function, remove the export from the function
 *    created in the second step
 */
import { SET_INSTRUMENT_ID, SET_CURRENT_PAGE, SET_CURRENT_USER,SET_RDS_URLS,SET_PARAMS_URL,SET_MODEL } from './AppConstants';
import { browserHistory } from 'react-router';

/**
 * Sets the instrument state of the application
 * @param {string} newState contains instrument id used in through out the application
 */
export function setInstrumentId (newState) {
  return { type: SET_INSTRUMENT_ID, newState };
}

/**
 * Sets the current page of the application
 * @param {string} newState contains page name used for nav bar
 */
export function setCurrentPage(newState) {
	return { type: SET_CURRENT_PAGE, newState };
}

export function setCurrentUser(newState){
	return {type : SET_CURRENT_USER, newState};
}
export function setmodelType(newState){
	return {type : SET_MODEL, newState};
}

export function setParamsUrl(newState){
	return {
		type : SET_PARAMS_URL,
		newState
	};
}

export function setRdsUrls(newState){
	return {
		type : SET_RDS_URLS,
		newState : newState 
	}
}