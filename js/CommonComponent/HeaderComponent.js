/*
 * HeaderComponent
 *
 * Header component is common for all the pages
 *
 */

import React, { Component} from 'react';

export default class HeaderComponent extends Component {
	render() {
    	return (
    		<div className='app-header-class'>
				Movie Search App
			</div>
		);
  	}
}