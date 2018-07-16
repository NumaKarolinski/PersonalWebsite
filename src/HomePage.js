import React, { Component} from "react";

import styled, { keyframes } from 'styled-components';

import $ from 'jquery';

import OpeningPage from './OpeningPage.js';
import MainPage from './MainPage.js';

import "./HomePage.scss";;

export default class HomePage extends Component{

	constructor(props){

		super(props);

		this.state = {

			inWelcomeAnimation: true
		}
	}

	componentDidMount(){

		console.log(this.state.inWelcomeAnimation);
		
		if(this.state.inWelcomeAnimation === true){

			let welcomeAnimation = setInterval(this.changeHtml, 4000);

			let date = new Date();
			let startTime = date.getTime();

			this.setState({
				welcomeAnimation,
				startTime,
			});

		}

		else{

			console.log("hello");

			setTimeout(() => {

				console.log("hi");
				$('#aboutMeDiv').addClass('clickableButton');

			}, 2800);

		}

	}

	changeHtml(){

		if(($('#welcome').html()) === "Welcome"){
			$('#welcome').html("Bienvenue");
			$('#clickToEnter').html("(Cliquez Pour Entrer)");
		}
		else if(($('#welcome').html()) === "Bienvenue"){
			$('#welcome').html("Welcome");
			$('#clickToEnter').html('(Click To Enter)');
		}
	}

	clearWelcome(){

		let date = new Date();
		let endTime = date.getTime();

		let millisecondsPassed = endTime - this.state.startTime;

		let fadesDone = (Math.ceil(millisecondsPassed/4000));

		let timeStall = (fadesDone * 4000) - (millisecondsPassed);

		$('#animTextBox').css({
			"animation-iteration-count": fadesDone,
		});

		let millisecondsAnimationEnd = millisecondsPassed + timeStall;

		let secondsInBackgroundGradientAnimation = (millisecondsAnimationEnd / 1000) % 36;
		let backgroundChangeFrame = Math.ceil(secondsInBackgroundGradientAnimation * 25);

		let angle1 = 2 * Math.PI * backgroundChangeFrame / 900;
		let angle2 = angle1 - Math.PI;

		let sin1 = Math.sin(angle1);
		let sin2 = Math.sin(angle2);

		let cos1 = Math.cos(angle1);
		let cos2 = Math.cos(angle2);

		let xLeftPercent = 25 + cos1 * 12.5;

		let yLeftPercent = 25 + sin1 * 12.5;

		let xRightPercent = 75 + cos2 * 12.5;

		let yRightPercent = 75 + sin2 * 12.5;

		let leftR = 0;
		let leftG = 0;
		let leftB = 0;

		let rightR = 0;
		let rightG = 0;
		let rightB = 0;

		if(backgroundChangeFrame < 100){

			leftR = 218.75;
			leftG = 62.5 + backgroundChangeFrame * 0.625;
			leftB = 62.5;

			rightR = 140;
			rightG = 80 + backgroundChangeFrame * 0.4;
			rightB = 40;

		}

		else if(backgroundChangeFrame < 200){

			backgroundChangeFrame = backgroundChangeFrame - 100;
			
			leftR = 218.75;
			leftG = 125 + backgroundChangeFrame * 0.625;
			leftB = 62.5;

			rightR = 140 - backgroundChangeFrame * 0.4;
			rightG = 120 + backgroundChangeFrame * 0.2;
			rightB = 40;

		}

		else if(backgroundChangeFrame < 300){

			backgroundChangeFrame = backgroundChangeFrame - 200;
			
			leftR = 218.75 - backgroundChangeFrame * 0.625;
			leftG = 187.5 + backgroundChangeFrame * 0.3125;
			leftB = 62.5;

			rightR = 100 - backgroundChangeFrame * 0.6;
			rightG = 140;
			rightB = 40;

		}

		else if(backgroundChangeFrame < 400){

			backgroundChangeFrame = backgroundChangeFrame - 300;
			
			leftR = 156.25 - backgroundChangeFrame * 0.9375;
			leftG = 218.75;
			leftB = 62.5;

			rightR = 40;
			rightG = 140;
			rightB = 40 + backgroundChangeFrame;

		}

		else if(backgroundChangeFrame < 500){

			backgroundChangeFrame = backgroundChangeFrame - 400;
			
			leftR = 62.5;
			leftG = 218.75;
			leftB = 62.5 + backgroundChangeFrame * 1.5625;

			rightR = 40;
			rightG = 140 - backgroundChangeFrame * 0.8;
			rightB = 140;

		}

		else if(backgroundChangeFrame < 600){

			backgroundChangeFrame = backgroundChangeFrame - 500;
			
			leftR = 62.5;
			leftG = 218.75 - backgroundChangeFrame * 1.25;
			leftB = 218.75;

			rightR = 40 + backgroundChangeFrame * 0.6;
			rightG = 60 - backgroundChangeFrame * 0.2;
			rightB = 140;

		}

		else if(backgroundChangeFrame < 700){

			backgroundChangeFrame = backgroundChangeFrame - 600;
			
			leftR = 62.5 + backgroundChangeFrame * 0.9375;
			leftG = 93.75 - backgroundChangeFrame * 0.3125;
			leftB = 218.75;

			rightR = 100 + backgroundChangeFrame * 0.4;
			rightG = 40 + backgroundChangeFrame * 0.2;
			rightB = 140;

		}

		else if(backgroundChangeFrame < 800){

			backgroundChangeFrame = backgroundChangeFrame - 700;
			
			leftR = 156.25 + backgroundChangeFrame * 0.625;
			leftG = 62.5 + backgroundChangeFrame * 0.3125;
			leftB = 218.75;

			rightR = 140;
			rightG = 60 - backgroundChangeFrame * 0.2;
			rightB = 140 - backgroundChangeFrame;

		}

		else{

			backgroundChangeFrame = backgroundChangeFrame - 800;
			
			leftR = 218.75;
			leftG = 93.75 - backgroundChangeFrame * 0.3125;
			leftB = 218.75 - backgroundChangeFrame * 1.5625;

			rightR = 140;
			rightG = 50 + backgroundChangeFrame * 0.4;
			rightB = 40;

		}

		let leftRStep = (225 - leftR)/100;
		let leftGStep = (225 - leftG)/100;
		let leftBStep = (225 - leftB)/100;

		let rightRStep = (100 - rightR)/100;
		let rightGStep = (100 - rightG)/100;
		let rightBStep = (100 - rightB)/100;

		/*let a = 2.5;
		let b = -3;
		let D0 = -2.25;

		let firstX = (4000 - timeStall)/4000;
		let x = null;

		if(firstX >= 0.5){

			x = 2*firstX - 1;

		}else{

			x = 2*firstX;

		}

		let C = Math.pow(((-168.75 * x + 47.25 + Math.pow((28476.5625 * x * x - 15946.875 * x + 2278.125),(1/2)))/2),(1/3));
		let t = -(b + C + (D0 / C))/(3 * a);

		let opacity = null;

		if(firstX >= 0.5){

			opacity = 1 - (-2 * t * t * t + 3 * t * t);

		}else{

			opacity = -2 * t * t * t + 3 * t * t;

		}

		console.log(opacity);
		console.log(timeStall);
		console.log(firstX);
		console.log(x);*/

		setTimeout(() => {

			clearInterval(this.state.welcomeAnimation);

			$('#animTextBox').css({
				"animation-iteration-count": '',
			});

			this.setState({

				inWelcomeAnimation: false,
				onHomePage: true,
				xLeftPercent,
				yLeftPercent,
				xRightPercent,
				yRightPercent,
				leftR,
				leftRStep,
				leftG,
				leftGStep,
				leftB,
				leftBStep,
				rightR,
				rightRStep,
				rightG,
				rightGStep,
				rightB,
				rightBStep,

			});

		}, timeStall);

	}

	render(){

		if(this.state.inWelcomeAnimation === true){

			return(

				<OpeningPage clearWelcome = {this.clearWelcome.bind(this)}/>

			);
		}

		else{

			return(

				<MainPage xLeftPercent = {this.state.xLeftPercent} yLeftPercent = {this.state.yLeftPercent} 
						 xRightPercent = {this.state.xRightPercent} yRightPercent = {this.state.yRightPercent}
						 leftR = {this.state.leftR} leftRStep = {this.state.leftRStep} 
						 leftG = {this.state.leftG} leftGStep = {this.state.leftGStep} 
						 leftB = {this.state.leftB} leftBStep = {this.state.leftBStep} 
						 rightR = {this.state.rightR} rightRStep = {this.state.rightRStep} 
						 rightG = {this.state.rightG} rightGStep = {this.state.rightGStep} 
						 rightB = {this.state.rightB} rightBStep = {this.state.rightBStep}
						 changePage = {this.props.changePage.bind(this)} setBackground = {this.props.setBackground.bind(this)}/>

			);
		}
	}
}