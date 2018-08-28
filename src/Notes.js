import React, { Component} from "react";
import $ from 'jquery';

import "./Notes.scss";

import BackgroundDiv from './BackgroundDiv.js';
import MenuBar from './MenuBar.js';
import BodyDiv from './BodyDiv.js';
import BodyHeader from './BodyHeader.js';
import APdfDiv from './APdfDiv.js';

export default class Notes extends Component{

	constructor(props){

		super(props);
	}

	render(){

		return(

			<BackgroundDiv xLeftPercent = {this.props.xLeftPercent} xRightPercent = {this.props.xRightPercent} yLeftPercent = {this.props.yLeftPercent} yRightPercent = {this.props.yRightPercent}>
			
				<MenuBar button1 = {"Projects"} button2 = {"About Me"} previousPage = {this.props.previousPage} changePage = {this.props.changePage.bind(this)}/>

				<BodyDiv>

					<BodyHeader className = "bodyHeader">Notes</BodyHeader>

					<div class="allPdfDivs">

							<APdfDiv fileName = "css3.pdf" downloadName = "CSS3"/>

							<APdfDiv fileName = "phys257.pdf" downloadName = "Experimental Methods 1"/>

							<APdfDiv fileName = "phys232.pdf" downloadName = "Heats and Waves"/>

							<APdfDiv fileName = "javascript.pdf" downloadName = "Javascript"/>

							<APdfDiv fileName = "jquery.pdf" downloadName = "jQuery"/>

							<APdfDiv fileName = "phys340.pdf" downloadName = "Majors Electricity and Magnetism"/>

							<APdfDiv fileName = "phys241.pdf" downloadName = "Signal Processing"/>

					</div>
				</BodyDiv>
			</BackgroundDiv>
		);
	}
}

