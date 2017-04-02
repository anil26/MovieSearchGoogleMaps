/*
 * File Search container
 *
 * It import side bar and google map component.
 *
 */

import React, { Component} from 'react';
import GoogleMapComponent from '../../../CommonComponent/GoogleMapComponent';
import FileSearchSideBar from './FilmSearchSideBar';
import {getMovieDetails,getSpecificMovieDetails} from './FilmSearchActions';
import { connect } from 'react-redux';
import _ from 'underscore';

class FilmLocationSearchComponent extends Component {
	constructor(props){
		super(props);
		this.state={
			movieData : []
		}
		this.onChangeInputbox = this.onChangeInputbox.bind(this);
		this.createAutosuggestions = this.createAutosuggestions.bind(this);
		this.onClickSearchIcon = this.onClickSearchIcon.bind(this);
	}
	onChangeInputbox(){
		var movieName=this.refs['movie-name'].value;
		this.props.dispatch(getMovieDetails(movieName));	
		var autosuggestionHandle = this.refs['auto-suggestions'];
		autosuggestionHandle.style.visibility = '';
	}
	componentWillReceiveProps(nextProps,nextState){
		var movieData = nextProps.data.movieData;
	}
	componentDidMount(){
		var inputSectionHandle = this.refs['input-section'];
		var autosuggestionHandle = this.refs['auto-suggestions'];
		var inputBoxHandle=this.refs['movie-name'];
		inputSectionHandle.onmouseleave= () => {
			if(autosuggestionHandle.style.visibility==''){
				autosuggestionHandle.style.visibility='hidden';	
			}
			
		}
		inputBoxHandle.onkeydown=(e)=>{
			if(e.keyCode==13){
				var movieName=this.refs['movie-name'].value;
				if(movieName!==''){
					this.props.dispatch(getSpecificMovieDetails(movieName));		
				}
		        
			}
		}
		autosuggestionHandle.style.visibility='hidden';
	}
	onClickSearchIcon(){
		var movieName=this.refs['movie-name'].value;
		if(movieName!==''){
			this.props.dispatch(getSpecificMovieDetails(movieName));		
		}
	}
	onClickSuggestionItem(title){
		var autosuggestionHandle = this.refs['auto-suggestions'];
		this.refs['movie-name'].value=title;
		autosuggestionHandle.style.visibility='hidden';
		this.props.dispatch(getSpecificMovieDetails(title));	
		
		
	}
	createAutosuggestions(data){
		var uniq = [];

		return data.map((element,index,array)=>{
			if(uniq.indexOf(element.title)==-1){
				uniq.push(element.title);
				return (
					 <li key={"autosuggestions" + index} onClick={this.onClickSuggestionItem.bind(this,element.title)} className='auto-suggestion-item'><span>{element.title}({element['release_year']})</span><span className='float-right'>{element.director}</span></li>
				);	
			}
			else{
				return null;	
			} 
			
		});
	}

	render() {
		return (
    		<div className='movie-search-page'>
				<div className='input-section' ref='input-section'>
				  <input ref='movie-name' className='movie-search-bar' onChange={this.onChangeInputbox} placeholder='Know where your movie is shot' />
				  <span className='search-icon glyphicon glyphicon-search' onClick={this.onClickSearchIcon}></span>
				  <ul className='auto-suggestion' ref='auto-suggestions'>
					  {this.createAutosuggestions(this.props.data.suggestion)}
				  </ul>
				</div>
				<div className='row result-height'>
					{this.props.data.movieData.length!==0 && <div className='col-md-3 side-location-bar'>
						<FileSearchSideBar movieData={this.props.data.movieData} />
					</div>}
					<GoogleMapComponent movieData={this.props.data.movieData}/>
				</div>
			</div>
		);
  	}
}
function select(state) {
	return {
		data : state.MovieSearchAppReducer.MovieSearchReducer
	};
}



export default connect(select)(FilmLocationSearchComponent);
