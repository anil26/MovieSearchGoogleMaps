/*
 * HeaderComponent
 *
 * Header component is common for all the pages
 *
 */

import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

export default class AppComponent extends Component {
	componentWillReceiveProps(nextProps){
		this.setState({
        		children: nextProps.children
    	});
	}
	render() {
    	return (
    		<div className='height100per'>
    			<HeaderComponent />
				{ this.props.children }
				<FooterComponent />
			</div>
		);
  	}
}