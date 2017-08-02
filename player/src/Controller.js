// JavaScript Document
import React from 'react';
import './Controller.css';

export default class Controller extends React.Component {
	 constructor(props) {
        super(props)
        this.state = {
		}
    }
	handle(e){
		
		}
 	 render() {
		return (
			<div className="play" onClick={this.handle}>
			 	<audio id="audio"></audio>
				<span className="icon glyphicon glyphicon-step-backward"></span>
				<span className="icon glyphicon glyphicon-play"></span>
				<span className="icon glyphicon glyphicon-step-forward"></span>
				<span className="icon">2:55/4:55</span>
			</div>
		);
 	 }
	}
