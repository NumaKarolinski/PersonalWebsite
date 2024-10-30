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
                                    <span id = "aboutMeDescriptionText">Hi! My name is Numa Karolinski! It you would like to contact me, please use my email: numa.karolinski@mail.mcgill.ca. I am currently doing my Ph.D. at McGill University working on numerical simulations of Neutron star winds with Andrew Cumming. Prior to this, I completed my M.Sc. in Physics at Bishop's University under the supervision of Valerio Faraoni; together we worked on different aspects of his first-order thermodynamics of scalar-tensor gravity; I very much enjoyed thinking about general relativity and its modifications, especially in the context of the expansion of the universe. I recieved a B.Sc. from McGill University with a double major in Physics and Computer Science. My undergraduate experience included two years of astrophysics research (one year at CITA with Wei Zhu, and 1 year with Nicolas Cowan) as well as satellite imagery design within the McGill Space Group. During the Covid-19 pandemic, I worked remotely with Tangam Systems Inc. as a software developer and data analyst.</span>
                            </div>

                        </div>
                        
                        <div class="lowerAboutMeBody">
                            
                            <div class="selfLinks">

                                <AboutMeRedirectDiv id = "linkedInDiv" link = "https://www.linkedin.com/in/numa-karolinski-5a0a861b5/?originalSubdomain=ca" redirectName = "LinkedIn"/>
                                <AboutMeRedirectDiv id = "githubDiv" link = "https://github.com/NumaKarolinski" redirectName = "GitHub"/>
                                <AboutMeDownloadDiv id = "resumeDiv" fileName = "Resume_Numa_Karolinski_2021.pdf" downloadName="Resum&eacute;"/>

                            </div>
                        </div>
					</div>
				</BodyDiv>
			</BackgroundDiv>
		);
	}
}
