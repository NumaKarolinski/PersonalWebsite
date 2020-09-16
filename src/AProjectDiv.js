import React, { Component} from "react";
import $ from 'jquery';

import ProjectPictureDiv from './ProjectPictureDiv.js';

export default class AProjectDiv extends Component{

	constructor(props){

		super(props);
	}

	aButtonDivClick(e){

		if(e.target.id === ""){

			$(e.target).addClass('clicked');
			$(e.target.children[0]).addClass('clicked');
		}

		else{
			
			$(e.target).addClass('clicked');
			$(e.target.parentElement).addClass('clicked');
		}
	}

	render(){

		return(

			<div class = "aProjectDiv">
                
                <div class = "projectsDivUpper">
            
                    <ProjectPictureDiv id = {this.props.projectName + "ProjectsPicture"} class = "projectsPicture" fileName = {this.props.fileName} height = {this.props.height} width = {this.props.width} />

                    <div id = {this.props.projectName + "ProjectsDiv"} class = "projectsDescriptionDiv">
            
                        <span id = {this.props.projectName + "ProjectsSpan"} class = "projectsTextBox">{this.props.description}</span>
                   
                    </div>
                </div>
            
                <div class = "projectsDivLower">
            
                    <a id = {this.props.projectName + "ProjectsLink"} class = "projectsLink" href = {this.props.link} target="_blank" onClick = {(e) => this.aButtonDivClick(e)}>{this.props.clickText}</a>

                </div>
			</div>			

		);
	}
}


