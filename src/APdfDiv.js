import React, { Component} from "react";
import $ from 'jquery';

export default class APdfDiv extends Component{

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

			<a class = "aPdfDiv" href = {"./PDFs/" + this.props.fileName} download={this.props.downloadName} onClick = {(e) => this.aButtonDivClick(e)}>
				<span id = {this.props.fileName} class = "notesTextBox">{this.props.downloadName}</span>
			</a>

		);
	}
}