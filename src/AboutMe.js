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

                        <div class="upperAboutMeBody">
                            
                            <div class="selfPicture"></div>
                            <div class="selfDescription">
                                    <span id = "aboutMeDescriptionText">I am a recent graduate from McGill University with two B.Sc. Degrees in Physics and Computer Science. I am actively pursuing a career in science related fields, within academic or industry. I have two years of experience in astrophysics research and satellite imagery design within the McGill Space Group. I am interested in any opportunities which will allow me to continue to learn and discover. Contact me at numa.karolinski@mail.mcgill.ca.</span>
                            </div>

                        </div>
                        
                        <div class="lowerAboutMeBody">
                            
                            <div class="selfLinks">

                                <AboutMeRedirectDiv id = "linkedInDiv" link = "https://www.linkedin.com/in/numa-karolinski-5a0a861b5/?originalSubdomain=ca" redirectName = "LinkedIn"/>
                                <AboutMeRedirectDiv id = "githubDiv" link = "https://github.com/NumaKarolinski" redirectName = "GitHub"/>
                                <AboutMeDownloadDiv id = "resumeDiv" fileName = "Resume_Numa_Karolinski_2020.pdf" downloadName="Resum&eacute;"/>

                            </div>
                        </div>
					</div>
				</BodyDiv>
			</BackgroundDiv>
		);
	}
}