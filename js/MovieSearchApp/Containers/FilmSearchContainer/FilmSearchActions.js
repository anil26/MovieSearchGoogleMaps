'use strict'
//From Actions i want to call to services
import  * as FilmSearchConstants from './FilmSearchConstants';
import AppService from '../../../App/AppService';


/**
 * Logs for getting getSystemStatusAndDiag
 * @param  {instrumentId} username The username of the user to be logged in
 */
const  getMovieDetails=(keyword)=> {
	return (dispatch) => {
		dispatch(getMovieDetailsRequest());
		
		 function callback(success, err){
			if (success) {
				dispatch(getMovieDetailsSuccess(success));

			}
			else{
				dispatch(getMovieDetailsFailure(err));
			}
		};
		var encodedUrl = `https://data.sfgov.org/resource/wwmu-gmzc.json?%24where=title%20like%20'%25${keyword}%25'`;
		
		var reqUrl = encodedUrl;
		AppService.getData(reqUrl,callback,'json');

	}
}

const  getSpecificMovieDetails=(keyword)=> {
	return (dispatch) => {
		dispatch(getSpecificMovieDetailsRequest());
		
		 function callback(success, err){
			if (success) {
				dispatch(getSpecificMovieDetailsSuccess(success));

			}
			else{
				dispatch(getSpecificMovieDetailsFailure(err));
			}
		};
		var encodedUrl = `https://data.sfgov.org/resource/wwmu-gmzc.json?title=${keyword}`;
		var reqUrl = encodedUrl;
		AppService.getData(reqUrl,callback,'json');

	}
}




const getMovieDetailsSuccess=(result)=>{
  	return { type: FilmSearchConstants.MOVIE_SEARCH_API_SUCCESS,newState : result};
}
const getMovieDetailsFailure=(error)=>{
  	return { type: FilmSearchConstants.MOVIE_SEARCH_API_FAILURE, error : error};
}
const getMovieDetailsRequest=()=>{
		return { type: FilmSearchConstants.MOVIE_SEARCH_API_REQUEST };
}


const getSpecificMovieDetailsSuccess=(result)=>{
  	return { type: FilmSearchConstants.GET_LOCATIONDATA_MOVIE_SUCCESS,newState : result};
}
const getSpecificMovieDetailsFailure=(error)=>{
  	return { type: FilmSearchConstants.GET_LOCATIONDATA_MOVIE_FAILURE, error : error};
}
const getSpecificMovieDetailsRequest=()=>{
		return { type: FilmSearchConstants.GET_LOCATIONDATA_MOVIE_REQUEST };
}




export {
	getMovieDetails,
	getSpecificMovieDetails
}