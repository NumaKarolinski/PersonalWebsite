import React, { Component} from "react";

import "./AboutMe.scss";

import BackgroundDiv from './BackgroundDiv.js';
import MenuBar from './MenuBar.js';
import BodyDiv from './BodyDiv.js';
import BodyHeader from './BodyHeader.js';
import AboutMeRedirectDiv from './AboutMeRedirectDiv.js';
import AboutMeDownloadDiv from './AboutMeDownloadDiv.js';

export default class AboutMe extends Component{

	constructor(props){

		super(props);
	}

	render(){

		return(

			<BackgroundDiv xLeftPercent = {this.props.xLeftPercent} xRightPercent = {this.props.xRightPercent} yLeftPercent = {this.props.yLeftPercent} yRightPercent = {this.props.yRightPercent}>
			
				<MenuBar button1 = {"Projects"} button2 = {"Notes"} previousPage = {this.props.previousPage} changePage = {this.props.changePage.bind(this)}/>

				<BodyDiv>

					<BodyHeader className = "bodyHeader">About Me</BodyHeader>

					<div class="aboutMeBody">

                        <div class="selfPicture">
                            
                        </div>

                        <div class="selfDescription">
                            
                        </div>

                        <div class="selfLinks">
                            
                            <AboutMeRedirectDiv id = "linkedInDiv" link = "https://www.linkedin.com/in/numa-karolinski-5a0a861b5/?originalSubdomain=ca" redirectName = "LinkedIn"/>
                            <AboutMeRedirectDiv id = "githubDiv" link = "https://github.com/NumaKarolinski" redirectName = "GitHub"/>
                            <AboutMeDownloadDiv id = "resumeDiv" fileName = "Resume_Numa_Karolinski_2020.pdf" downloadName="Resume"/>
                                
                        </div>
					</div>
				</BodyDiv>
			</BackgroundDiv>
		);
	}
}