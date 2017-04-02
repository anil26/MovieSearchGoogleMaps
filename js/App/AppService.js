
/*
*	Common app service used in all the components of the applications
*
*         It contains two methods
*			a.getData used for get request method
*			b.postData used for post request method and getting the response back
*/

import { SERVICE_URL } from './AppConstants';

var AppService = {

	getData (reqUrl, callback,typeOfData) {
		var url =  reqUrl;
		$.ajax({
			url: url,
			type: 'get',
	        dataType: typeOfData,
	        async: true,
            crossDomain: true,
			success: function (success) {
				callback(success);
			},
			error: function (err) {
				console.log('error', err);
				callback('', err);
			}
		});
	},

	postData (reqObj, reqUrl, callback,typeObj) {
		var url = reqUrl;
		console.log(JSON.stringify(reqObj));
		var timeout;
		var data;
		var contentType;
		console.log("typeObj---->",reqObj.timeout);
		if(reqObj.timeout !==undefined){
			timeout = reqObj.timeout;
			delete reqObj.timeout;
		}
		else {
			timeout = 60000;
		}
		if(typeObj!==undefined){
			contentType = false;
			data = reqObj


		}
		else{
			contentType = "application/json; charset=utf-8";
			data = JSON.stringify(reqObj);
		}

		$.ajax({
			url: url,
			type: 'post',
	        dataType: 'json',
	        timeout : timeout,
	        contentType: contentType,
	        data: data,
	        processData : false,
			success: function (success) {
				
				callback(success);
			},
			error: function (err) {
				console.log('Error-->', err);
				callback('', err);
			}
		});
	}

}

module.exports = AppService;