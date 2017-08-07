// JavaScript Document
import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';// 引入connect 
import { fetchUrl,fetchLrc } from './actions/count';
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
					<div className="card_box">
					  <img src={this.props.img} alt={this.props.name} />
					  <div  className="card_content">
						  <p>{this.props.singer}</p>
						  <h3>{this.props.name}</h3>
						  <div onClick={() => fetchLrc(this.props.id)}>
						  	<Link to="/lrc"><span className="glyphicon glyphicon-play" onClick={() => fetchUrl(this.props.id,this.props.img,this.props.name,this.props.time)}></span></Link>
							<span className="time">{this.props.time}</span>
							<span className="glyphicon glyphicon-share"></span>
						  </div>
					  </div>
				  	</div>
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
    { fetchUrl,fetchLrc }
)(Card)