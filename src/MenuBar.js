import React, { Component} from "react";
import $ from 'jquery';

import ButtonDiv from "./ButtonDiv.js";
import MenuBottomBar from './MenuBottomBar.js';
import MenuBottomBarAnimation from './MenuBottomBarAnimation.js';

import "./MenuBarCSS.scss";

export default class MenuBar extends Component{

	constructor(props){

		super(props);
	}

	buttonClick(divType){

		$('.bodyHeader').addClass('buttonClicked');
        $('.allPdfDivs').addClass('buttonClicked');
        $('.aboutMeBody').addClass('buttonClicked');
        $('.projectsBody').addClass('buttonClicked');

		if(divType === "About Me"){

			$('.buttonDiv').addClass('aboutMeClicked');

			setTimeout(() => {

				this.props.changePage("aboutMePage");
			
			}, 700);
			
		}

		else if(divType === "Notes"){

			$('.buttonDiv').addClass('notesClicked');

			setTimeout(() => {

				this.props.changePage('notesPage');
			
			}, 700);

		}

		else if(divType === "Projects"){
			
			$('.buttonDiv').addClass('projectsClicked');

			setTimeout(() => {

				this.props.changePage('projectsPage');
			
			}, 700);
		}
	}

	render(){

		if(this.props.button1 === "Notes" && this.props.button2 === "About Me"){

			var prefix1 = "notes";
			var prefix2 = "aboutMe";
			var suffix = "Projects";
		}

		else if(this.props.button1 === "Projects" && this.props.button2 === "About Me"){

			var prefix1 = "projects";
			var prefix2 = "aboutMe";
			var suffix = "Notes";
		}

		else if(this.props.button1 === "Projects" && this.props.button2 === "Notes"){

			var prefix1 = "projects";
			var prefix2 = "notes";
			var suffix = "AboutMe";
		}

		if(this.previousPage === "homePage"){

			return(

				<div id="menuBarDiv">

					<ButtonDiv divId = {prefix1 + "Div" + suffix} btnId = {prefix1 + "Btn" + suffix} spanId = {prefix1 + suffix} spanText = {this.props.button1} divClass = {"firstClicked " + this.props.previousPage} buttonClick = {this.buttonClick.bind(this)}/>
					
					<ButtonDiv divId = {prefix2 + "Div" + suffix} btnId = {prefix2 + "Btn" + suffix} spanId = {prefix2 + suffix} spanText = {this.props.button2} divClass = {"secondClicked " + this.props.previousPage} buttonClick = {this.buttonClick.bind(this)}/>

					<div id = "menuNameDiv">

						<span id = "menuName">Numa Karolinski</span>

					</div>

					<MenuBottomBarAnimation></MenuBottomBarAnimation>

				</div>

			);	
		}

		else{

			return(

				<div id="menuBarDiv">

					<ButtonDiv divId = {prefix1 + "Div" + suffix} btnId = {prefix1 + "Btn" + suffix} spanId = {prefix1 + suffix} spanText = {this.props.button1} divClass = {"firstClicked " + this.props.previousPage} buttonClick = {this.buttonClick.bind(this)}/>
					
					<ButtonDiv divId = {prefix2 + "Div" + suffix} btnId = {prefix2 + "Btn" + suffix} spanId = {prefix2 + suffix} spanText = {this.props.button2} divClass = {"secondClicked " + this.props.previousPage} buttonClick = {this.buttonClick.bind(this)}/>

					<div id = "menuNameDiv">

						<span id = "menuName">Numa Karolinski</span>

					</div>

					<MenuBottomBar></MenuBottomBar>

				</div>

			);				
		}
	}
}