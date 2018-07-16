import React, { Component} from "react";
import $ from 'jquery';

import HomePageDiv from './HomePageDiv.js';
import ButtonDiv from './ButtonDiv.js';

import './MainPage.scss';

export default class MainPage extends Component{

	buttonClick(divType){

		$('#nameDiv').addClass('buttonClicked');

		if(divType === "About Me"){

			$('.buttonDiv').addClass('aboutMeClicked');

			setTimeout(() => {

				this.props.changePage("aboutMePage");
			
			}, 1700);
			
		}

		else if(divType === "Notes"){

			$('.buttonDiv').addClass('notesClicked');

			setTimeout(() => {

				this.props.changePage('notesPage');
			
			}, 1700);

		}

		else if(divType === "Projects"){
			
			$('.buttonDiv').addClass('projectsClicked');

			setTimeout(() => {

				this.props.changePage('projectsPage');
			
			}, 1700);
		}
	}

	componentWillUnmount(){
    
        let xLeftPercent = this.props.xLeftPercent;
        let yLeftPercent = this.props.yLeftPercent;
        let xRightPercent = this.props.xRightPercent;
        let yRightPercent = this.props.yRightPercent;

        let leftR = this.props.leftR + this.props.leftRStep * 100;
        let leftG = this.props.leftG + this.props.leftGStep * 100;
        let leftB = this.props.leftB + this.props.leftBStep * 100;

        let rightR = this.props.rightR + this.props.rightRStep * 100;
        let rightG = this.props.rightG + this.props.rightGStep * 100;
        let rightB = this.props.rightB + this.props.rightBStep * 100;

		this.props.setBackground(xLeftPercent, yLeftPercent, xRightPercent, yRightPercent);
	}

	render(){

		return(

			<HomePageDiv xLeftPercent = {this.props.xLeftPercent} yLeftPercent = {this.props.yLeftPercent} 
						 xRightPercent = {this.props.xRightPercent} yRightPercent = {this.props.yRightPercent}
						 leftR = {this.props.leftR} leftRStep = {this.props.leftRStep} 
						 leftG = {this.props.leftG} leftGStep = {this.props.leftGStep} 
						 leftB = {this.props.leftB} leftBStep = {this.props.leftBStep} 
						 rightR = {this.props.rightR} rightRStep = {this.props.rightRStep} 
						 rightG = {this.props.rightG} rightGStep = {this.props.rightGStep} 
						 rightB = {this.props.rightB} rightBStep = {this.props.rightBStep}>


				<div id = "nameDiv" >

					<span id = "name">Numa Karolinski</span>

				</div>

				<div id = "selectablesDiv" >

					<div id = "buttonDiv" >

						<ButtonDiv divId={"aboutMeDivHome"} btnId = {"aboutMeBtnHome"} spanId = {"aboutMeHome"} spanText = {"About Me"} buttonClick = {this.buttonClick.bind(this)}/>

						<ButtonDiv divId={"notesDivHome"} btnId = {"notesBtnHome"} spanId = {"notesHome"} spanText = {"Notes"} buttonClick = {this.buttonClick.bind(this)}/>

						<ButtonDiv divId={"projectsDivHome"} btnId = {"projectsBtnHome"} spanId = {"projectsHome"} spanText = {"Projects"} buttonClick = {this.buttonClick.bind(this)}/>

					</div>
				</div>	
			</HomePageDiv>

		);

	}
}

