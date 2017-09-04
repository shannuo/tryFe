// JavaScript Document
import React from 'react';
import { connect } from 'react-redux';// 引入connect 
import { addBill } from './actions/count';
import './Controller.css';

class Controller extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			type:'',
			money:'',
			income:'支出'
		}
	}
	handleSubmit=(event)=>
	{
		var bill = {type:'',money:'',income:''};
		bill.type = this.state.type;
		bill.money = this.state.money;
		bill.income = this.state.income;
		this.props.addBill(bill);
	}
	handleIncome=(event)=>
	{
		this.setState({
        income: event.target.value
      	});
	}
	handleType=(event)=>
	{
		this.setState({
        type: event.target.value
      	});
	}
	handleMoney=(event)=>
	{
		this.setState({
        money: event.target.value
      	});
	}
	componentWillReceiveProps(nextProps) 
	{
		this.setState({
        mes: nextProps.mes
      	});
	}
 	 render() {
		return (
			<div className="play">
				<form method="post">
				  <div className="form-group">
					  <div className="form-name left">
						<label>账单类型</label>
					  </div>
					  <input type="text" name="type" className="form-control left" value={this.state.type} onChange={this.handleType}/>
					  <div className="form-name left">
						<label>账单金额</label>
					  </div>
					  <input type="number" name="money" className="form-control left" value={this.state.money} onChange={this.handleMoney} /> 
					  <div className="form-name left">
						<label>收入/支出</label>
					  </div>
					  <input type="radio" name="income" className="form-input left" value="收入" onChange={this.handleIncome}/>收入
					  <input type="radio" name="income" className="form-input left" value="支出" checked onChange={this.handleIncome}/>支出
				  </div>
				  <div className="form-btn">
					  <input type="button" className="form-control" value="添加账单" onClick={this.handleSubmit} />
				  </div>
				  <div className="form-btn">
					<label className="text-danger">{this.state.mes}</label>
				  </div>
				</form>
			</div>
		);
 	 }
	}

const getText = state => {
    return {
        mes: state.update.mes
    }
}

export default connect(
    getText,
	{ addBill }
)(Controller)