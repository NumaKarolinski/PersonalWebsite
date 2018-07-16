import React, { Component} from "react";
import styled, { keyframes } from 'styled-components';


import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Notes from "./Notes";
import Projects from "./Projects";

import "./App.scss";


export default class App extends Component{

	constructor(props){

		super(props);

		this.state = {

			previousPage: null,
			currentPage: "homePage"
		}

		this.changePage = this.changePage.bind(this);
	}

	changePage(pageName){

		this.setState({

			previousPage: this.state.currentPage,
			currentPage: pageName,
		});

	}

	setBackground(xLeftPercent, yLeftPercent, xRightPercent, yRightPercent){

		this.setState({

			xLeftPercent, yLeftPercent, xRightPercent, yRightPercent
		});
	}

	render(){

		if(this.state.currentPage === "homePage"){

			return(

		    	<HomePage changePage = {this.changePage.bind(this)} setBackground = {this.setBackground.bind(this)}/>

		    );
		}

		else if(this.state.currentPage === "projectsPage"){

			return(

				<Projects changePage = {this.changePage.bind(this)}
		    			  previousPage = {this.state.previousPage}
		    			  xLeftPercent = {this.state.xLeftPercent} yLeftPercent = {this.state.yLeftPercent}
		    			  xRightPercent = {this.state.xRightPercent} yRightPercent = {this.state.yRightPercent}/>

			);
		}

		else if(this.state.currentPage === "notesPage"){

			return(

		    	<Notes changePage = {this.changePage.bind(this)}
		    		   previousPage = {this.state.previousPage}
	    			   xLeftPercent = {this.state.xLeftPercent} yLeftPercent = {this.state.yLeftPercent}
	    			   xRightPercent = {this.state.xRightPercent} yRightPercent = {this.state.yRightPercent}/>

		    );
		}

		else if(this.state.currentPage === "aboutMePage"){

			return(

		    	<AboutMe changePage = {this.changePage.bind(this)}
		    			 previousPage = {this.state.previousPage}
		    			 xLeftPercent = {this.state.xLeftPercent} yLeftPercent = {this.state.yLeftPercent}
		    			 xRightPercent = {this.state.xRightPercent} yRightPercent = {this.state.yRightPercent}/>

		    );
		}
	}
}
