'use strict'




//From Actions i want to call to services
import  * as GoogleMapConstants from './GoogleMapConstants';
import AppService from '../App/AppService';


/**
 * Logs for getting getSystemStatusAndDiag
 * @param  {instrumentId} username The username of the user to be logged in
 */
const  getGoogleMapApi=(url)=> {
	// /proservice-apis/v1/instrument/6866333/details
	return (dispatch) => {
		//dispatch(//googleApiFetchRequest());
		
		 function callback(success, err){
			
			if (success) {
				//dispatch(googleApiFetchSuccess());
			}
			else{
				//dispatch(googleApiFetchFailure(err));
			}
		};
		var reqUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAbZFwD28K5AVgjeoLeutNnKiPJ_nfO2Bg';
		AppService.getData(reqUrl,callback,'jsonp');

	}
}

const  getGeoCodeForLocation=(keyword)=> {
	// /proservice-apis/v1/instrument/6866333/details
	return (dispatch) => {
		dispatch(getGeoCodeRequest());
		
		 function callback(success, err){
			if (success) {
				dispatch(getGeoCodeSuccess(success.results));

			}
			else{
				dispatch(getGeoCodeFailure(err));
			}
		};
		var encodedUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${keyword}&key=AIzaSyAbZFwD28K5AVgjeoLeutNnKiPJ_nfO2Bg`;
		console.log(encodedUrl);
		var reqUrl = encodedUrl;
		AppService.getData(reqUrl,callback,'json');

	}
}

const getGeoCodeSuccess=(result)=>{
  	return { type: FilmSearchConstants.GET_GEOCODE_SUCCESS,newState : result};
}
const getGeoCodeFailure=(error)=>{
  	return { type: FilmSearchConstants.GET_GEOCODE_FAILURE, error : error};
}
const getGeoCodeRequest=()=>{
		return { type: FilmSearchConstants.GET_GEOCODE_REQUEST };
}


const googleApiFetchSuccess=()=>{
  	return { type: GoogleMapConstants.LOAD_GOOGLE_API_SUCCESS};
}
const googleApiFetchFailure=(error)=>{
  	return { type: GoogleMapConstants.LOAD_GOOGLE_API_FAILURE, error : error};
}
const googleApiFetchRequest=()=>{
		return { type: GoogleMapConstants.LOAD_GOOGLE_API_REQUEST };
}

export {
	getGoogleMapApi
}