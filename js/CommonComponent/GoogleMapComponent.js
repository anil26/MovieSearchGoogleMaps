/*
 * HeaderComponent
 *
 * Header component is common for all the pages
 *
 */

import React, { Component} from 'react';
import {getGoogleMapApi} from './GoogleMapActions';
import { getData } from '../App/AppService';
const assign = Object.assign || require('object.assign');

export default class GoogleMapComponent extends Component {
	constructor(props){
		super(props);
		this.state={
			locations :[],
			center : {lat : 37.773972,lng : -122.431297},
			
		}
		this.initMap = this.initMap.bind(this);
	}
	componentDidMount(){
		var url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAbZFwD28K5AVgjeoLeutNnKiPJ_nfO2Bg';
		var googleMapContainer = document.getElementById('google-map-container');
		if(googleMapContainer.children.length==0){
			getData(url,this.initMap,'jsonp');
		}
	}
	isEmptyArray(arr){
		return (arr.length==0);
	}
	componentWillReceiveProps(nextProps,nextState){
		if(nextProps.movieData==this.props.movieData){
			return;
		}
		this.setState({
			locations : []
		});
		var movieData = nextProps.movieData;
		var callback = (success,error)=>{
			var newLocationArr;
			var latSum = 0;
			var lngSum = 0;
			var count=0;
			var labels = [];
			if(success){
				newLocationArr=this.state.locations.map((element,index,array)=>{
					latSum+=element.lat;
					lngSum+=element.lng;
					
					count++;
				
					
					return assign({},{
						lat : element.lat,
						lng : element.lng,
						label : element.label
					});
				})
				if(!this.isEmptyArray(success.results)){
					var locationObj = success.results[0].geometry.location;
					count++;
					latSum+=locationObj.lat;
					lngSum+=locationObj.lng;
					newLocationArr.push({
					lat : locationObj.lat,
					lng : locationObj.lng,
					label : success.results[0]['address_components'][0]['short_name']
				    });	
				}

				var meanLat = latSum/count;
				var meanLng = lngSum/count;
				if(meanLat==NaN || meanLng==NaN){
					meanLat =0;
					meanLng =0;
				}
				this.setState({
						locations : newLocationArr,
						center : {
							lat : meanLat,
							lng : meanLng
						}
				   })	
				this.initMap();
			}

			
		}
		
		movieData.forEach((element,index,array)=>{
			//Need to check as API is not consistent
			if(element.locations){
				var locationName = element.locations;
				var keywordArr = locationName.split(' ');
				var keywordToBeSent = keywordArr.join('+');
				var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${keywordToBeSent}&key=AIzaSyAbZFwD28K5AVgjeoLeutNnKiPJ_nfO2Bg`;
				getData(url,callback,'json');	
			}
			
		})
		
	}

   initMap() {
	   var locations = this.state.locations;
		var map = new google.maps.Map(document.getElementById('google-map-container'), {
	      center: this.state.center,
	      zoom: 4
	    });
      
	  // Add some markers to the map.
	  // Note: The code uses the JavaScript Array.prototype.map() method to
	  // create an array of markers based on a given "locations" array.
	  // The map() method here has nothing to do with the Google Maps API.
	  var markers = locations.map(function(location, i) {
	    
	    return new google.maps.Marker({
	      position: {lat:location.lat,lng : location.lng},
	      label: location.label
	    });
     });

  // Add a marker clusterer to manage the markers.
      var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
   }
	render() {
    	return (
    		<div id='google-map-container' className={this.props.movieData.length==0 ? 'map-bar' : 'col-md-9'}>
				
			</div>
		);
  	}
}