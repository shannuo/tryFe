// JavaScript Document
import React from 'react';
import { connect } from 'react-redux';// 引入connect 
import {  } from './actions/count';
import './Controller.css';

class Controller extends React.Component {
	  constructor(props) {
    super(props)
    this.state = {
      isPlay: true,
      allTime: 0,
      currentTime: 0
    }
  }
 	 render() {
		const {text,changetime} = this.props
		return (
			<div className="play" onClick={this.handle}>
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
    getText,
	{  }
)(Controller)