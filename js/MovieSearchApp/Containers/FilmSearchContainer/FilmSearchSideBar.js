/*
 * HeaderComponent
 *
 * Header component is common for all the pages
 *
 */

import React, { Component} from 'react';


export default class FileSearchSideBar extends Component {
	constructor(props){
		super(props);

	}

	createHtmlForSideBar(data){
		return data.map((element,index,array)=>{
			return (
				<li key ={index + "sidebar"} className='location-item'>
    				<span className='location-name'>{element.locations}</span>
    				<span className='movie-name'>{element.title}({element['release_year']})</span>
    				<span className='actors-name'>{element['actor_1']},{element['actor_2']}</span>
    				<span className='director-name'>Director : {element.director}</span>
    			</li>
			);
		})
	}
	render() {
    	return (
    		<ul className='side-bar-result'>
    			{(this.props.movieData.length!==0)&& this.createHtmlForSideBar(this.props.movieData)}
    		</ul>
		);
  	}
}