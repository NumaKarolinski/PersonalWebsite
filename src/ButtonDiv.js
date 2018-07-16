import React, { Component} from "react";

import './ButtonDivCSS.scss';			

export default class ButtonDiv extends Component{

	constructor(props){

		super(props);
	}

	render(){

		if(this.props.divClass){

			return(

				<div id = {this.props.divId} class = {"buttonDiv " + this.props.divClass} onClick = {() => this.props.buttonClick(this.props.spanText)}>
					<button id = {this.props.btnId} class = "buttonButton"></button>
					<span id = {this.props.spanId} class = "buttonSpan">{this.props.spanText}</span>
				</div>
			);
		}

		else{
			
			return(

				<div id = {this.props.divId} class = "buttonDiv" onClick = {() => this.props.buttonClick(this.props.spanText)}>
					<button id = {this.props.btnId} class = "buttonButton"></button>
					<span id = {this.props.spanId} class = "buttonSpan">{this.props.spanText}</span>
				</div>
			);
		}
	}
}