// JavaScript Document
import React from 'react';
import './Demo.css';
import Card from './Card';
import { connect } from 'react-redux';// 引入connect 

class Demo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			time:"周",
			outcome:50,
			income:0
			}
    }
	handle=(event)=>{
		this.setState({time: event.target.value});
	}
	componentWillReceiveProps(nextProps) 
	{
		if(nextProps.username)
			this.props.fetchBill(this.state.time);
	}
	 
	render() {
	  const { data } = this.props;
	  return (
		<div>
			  <div className="box">
				  <h5>-本{this.state.time}账单</h5>
				  <div className="account">
					  <span>支出：{this.state.outcome}</span>
					  <span>收入：{this.state.income}</span>
				  </div>
				  {data.map((key,index) => 
				  <Card key={index.toString()} url={key.url} name={key.name} time={key.time} lrc={key.lrc} img={key.img} id={key.id} singer={key.singer} />
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
    getData
)(Demo)