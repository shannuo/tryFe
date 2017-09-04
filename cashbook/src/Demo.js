// JavaScript Document
import React from 'react';
import './Demo.css';
import Card from './Card';
import { connect } from 'react-redux';// 引入connect 
import { bill } from './actions/count' //引入账单获取方法

class Demo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			time:""
			}
    }
	handle=(event)=>{
		this.setState({time: event.target.value});
		var time;
		if(event.target.value==='周')
			time = 'week';
		if(event.target.value==='月')
			time = 'month';
		if(event.target.value==='年')
			time = 'year';
		if(this.props.username)
			this.props.bill(time);
	}
	 
	render() {
	  const { data } = this.props;
	  return (
		<div>
			  <div className="box">
			  	<div className="white">
				  <p>-本{this.state.time}账单</p>
				  <div className="account">
					  <span>支出：{this.props.data.outcome}</span>
					  <span>收入：{this.props.data.income}</span>
				  </div>
				</div>
				{data.map((key,index) => 
				<Card key={index.toString()} money={key.money} type={key.type} income={key.income} createtime={key.createtime} />
				)}
			  </div>
			  <div className="button_box">
				  <input className="col-xs-4 col-sm-4 btn-link time" type="button" onClick={this.handle} value="周" />
				  <input className="col-xs-4 col-sm-4 btn-link time" type="button" onClick={this.handle} value="月" />
				  <input className="col-xs-4 col-sm-4 btn-link time" type="button" onClick={this.handle} value="年" />
			  </div>
		</div>
	  );
	}
}
const getData = state => {
    return {
        data: state.update.data,
		username: state.update.username
    }
}

export default connect(
    getData,
	{bill}
)(Demo)