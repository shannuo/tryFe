// JavaScript Document
import React from 'react';
import { connect } from 'react-redux';// 引入connect 
import './Controller.css';

class Controller extends React.Component {
	 constructor(props) {
        super(props)
        this.state = {
		}
    }
 	 render() {
		const {text} = this.props
		return (
			<div className="play" onClick={this.handle}>
			 	<audio id="audio" className="play" src={text} autoPlay="autoplay" controls></audio>
				<span className="icon glyphicon glyphicon-step-backward"></span>
				<span className="icon glyphicon glyphicon-play"></span>
				<span className="icon glyphicon glyphicon-step-forward"></span>
				<span className="icon1">{text.name}</span>
				<span className="icon1">{text.time}</span>
				<div className="progress pro">
					<div className="progress-bar probar" role="progressbar" aria-valuenow="60" 
						aria-valuemin="0" aria-valuemax="100">
						<span className="sr-only">40% 完成</span>
					</div>
				</div>
			</div>
		);
 	 }
	}

const getText = state => {
    return {
        text: state.update.text
    }
}

export default connect(
    getText
)(Controller)