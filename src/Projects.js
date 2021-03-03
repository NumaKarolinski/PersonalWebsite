import React, { Component} from "react";

import "./Projects.scss";

import BackgroundDiv from './BackgroundDiv.js';
import MenuBar from './MenuBar.js';
import BodyDiv from './BodyDiv.js';
import BodyHeader from './BodyHeader.js';
import AProjectDiv from './AProjectDiv.js';

export default class Projects extends Component{

	constructor(props){
		super(props);
	}

	render(){

		return(

			<BackgroundDiv xLeftPercent = {this.props.xLeftPercent} xRightPercent = {this.props.xRightPercent} yLeftPercent = {this.props.yLeftPercent} yRightPercent = {this.props.yRightPercent}>
			
				<MenuBar button1 = {"Notes"} button2 = {"About Me"} previousPage = {this.props.previousPage} changePage = {this.props.changePage.bind(this)} />

				<BodyDiv>

					<BodyHeader className = "bodyHeader">Projects</BodyHeader>

                    <div class="projectsBody">
                        
                        <AProjectDiv fileName = "parallaxEffectGray.png" projectName = "cita2019" width = {448} height = {264} clickText = "Read My Publication For More Information!" link = "https://arxiv.org/pdf/2006.02441.pdf" description = "I worked alongside Dr. Wei Zhu from the Canadian Institute for Theoretical Astrophysics in 2019 as an undergraduate researcher. I analyzed OGLE-III data for black holes using a new gravitational microlensing technique." />
                            
                        <AProjectDiv fileName = "albedoMapWebsite.png" projectName = "mecha2020" width = {424.4} height = {264} clickText = "Take a look at my stan code!" link = "https://github.com/NumaKarolinski/exoplanet_inverse_problem_stan_toy_model" description = "In the summer of 2020 I worked with Prof. Nicolas Cowan from McGill University. I investigated 3 programs that solve the exoplanet inverse problem. I ended the summer by writing a stan program that solves the inverse problem with a Hamiltonian Monte Carlo simulation." />

			<AProjectDiv fileName = "nufavicon.png" projectName = "nuschedule2021" width = {264} height = {264} clickText = "Check out nuschedule!" link = "https://nuschedule.com" description = "We all know what we want to do, but scheduling gets annoying, and if your schedule is too strict, your time feels monotonous. This schedule adds randomization features to make each day unique." />.

                    </div>
				</BodyDiv>
			</BackgroundDiv>
		);
	}
}
