import React, { Component} from "react";
import $ from 'jquery';

export default class AboutMeDownloadDiv extends Component{

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
				<a class = "aboutMeDownloadDiv" href = {"https://cdn.rawgit.com/NumaKarolinski/PersonalWebsite/websiteVersion1.2/src/PDFs/" + this.props.fileName} download={this.props.downloadName} onClick = {(e) => this.aButtonDivClick(e)}>
					<span id = {this.props.downloadName + "AboutMeDiv"} class = "aboutMeTextBox">{this.props.downloadName}</span>
				</a>
			</div>			

		);
	}
}