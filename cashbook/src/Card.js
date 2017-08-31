// JavaScript Document
import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';// 引入connect 
import { } from './actions/count';
import './Demo.css';

class Card extends React.Component{
	constructor(props) {
    super(props);
    this.state = {};
	}
    render(){
		const { fetchUrl,fetchLrc } = this.props;
        return(
				<div className="col-sm-3 col-xs-6 card">
				</div>
        )
    }
}

const changeText = state => {
    return {
        text: state.update.text
    }
}

export default connect(
    changeText,
    {  }
)(Card)