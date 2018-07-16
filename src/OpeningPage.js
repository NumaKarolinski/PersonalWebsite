import React, { Component} from "react";

export default class OpeningPage extends Component{

	render(){

		return(

			<div id = "homePageDiv" onClick = {this.props.clearWelcome.bind(this)} >

				<div id = "animTextBox">
						
					<span id="welcome">Welcome</span>
					<span id="clickToEnter">(Click to Enter)</span>

				</div>

			</div>

		);

	}

}

