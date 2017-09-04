// JavaScript Document
import React from 'react';
import { connect } from 'react-redux';// 引入connect 
import './Demo.css';

class Card extends React.Component{
	constructor(props) {
    super(props);
    this.state = {};
	}
    render(){
        return(
				<div className="col-sm-3 col-xs-12 card">
					<div className="title">
						<span>{this.props.createtime}</span>
						<span className="right">{this.props.income} {this.props.money}</span>
						<div className="clearfix"></div> 
					</div>
					<div className="card_content">
						<span>{this.props.type}</span>
						<span className="right">{this.props.income==='支出' ? '-'+this.props.money : '+'+this.props.money}</span>
						<div className="clearfix"></div>
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
    {  }
)(Card)