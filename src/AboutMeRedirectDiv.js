import React, { Component} from "react";
import $ from 'jquery';

export default class AboutMeRedirectDiv extends Component{

	constructor(props){

		super(props);
	}

	aButtonDivClick(e){

		if(e.target.id === ""){

			$(e.target).addClass('clicked');
			$(e.target.children[0]).addClass('clicked');
		}

		else{
			
			$(e.target).addClass('clicked');
			$(e.target.parentElement).addClass('clicked');
		}
	}

	render(){

		return(

			<div>
				<a class = "aboutMeRedirectDiv" href = {this.props.link} target="_blank" onClick = {(e) => this.aButtonDivClick(e)}>
					<span id = {this.props.redirectName + "AboutMeDiv"} class = "aboutMeTextBox">{this.props.redirectName}</span>
				</a>
			</div>			

		);
	}
}