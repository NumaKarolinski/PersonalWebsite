import React, { Component} from "react";

import "./Projects.scss";

import BackgroundDiv from './BackgroundDiv.js';
import MenuBar from './MenuBar.js';
import BodyDiv from './BodyDiv.js';
import BodyHeader from './BodyHeader.js';

export default class Projects extends Component{

	constructor(props){

		super(props);
	}

	render(){

		return(

			<BackgroundDiv xLeftPercent = {this.props.xLeftPercent} xRightPercent = {this.props.xRightPercent} yLeftPercent = {this.props.yLeftPercent} yRightPercent = {this.props.yRightPercent}>
			
				<MenuBar button1 = {"Notes"} button2 = {"About Me"} previousPage = {this.props.previousPage} changePage = {this.props.changePage.bind(this)}/>

				<BodyDiv>

					<BodyHeader className = "bodyHeader">Projects</BodyHeader>
				</BodyDiv>
			</BackgroundDiv>
		);
	}
}