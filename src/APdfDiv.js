import React, { Component} from "react";
import $ from 'jquery';

export default class APdfDiv extends Component{

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

			<div>
				Wtf
			</div>			

		);
	}
}


