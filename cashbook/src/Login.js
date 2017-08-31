import React, { Component } from 'react';
import { connect } from 'react-redux';// 引入connect 
import { login } from './actions/count'
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
			username:'',
			password:'',
			mes:''
        }
    }
	handleUsername=(event)=>
	{
		this.setState({
        username: event.target.value
      	});
	}
	handlePassword=(event)=>
	{
		this.setState({
        password: event.target.value
      	});
	}
	componentWillReceiveProps(nextProps) 
	{
		this.setState({
        mes: nextProps.mes
      	});
	}
	
 	render() {
		const { login } = this.props;
		return (
		<div className="login">
			<form method="post">
			  <div className="form-group">
				  <div className="form-name left">
					<label>用户名</label>
				  </div>
				  <input type="text" className="form-control left" value={this.state.username} onChange={this.handleUsername}/>
			  </div>
			  <div className="form-group">
				  <div className="form-name left">
					<label>密码</label>
				  </div>
				  <input type="password" className="form-control left" value={this.state.password} onChange={this.handlePassword}/>
			  </div>
			  <div className="form-btn">
				  <input type="button" className="form-control" value="登录"  onClick={() => login(this.state.username,this.state.password,1)} />
				  <input type="button" className="form-control" value="注册" onClick={() => login(this.state.username,this.state.password,2)} />
			  </div>
			  <div className="form-btn">
				<label className="text-danger">{this.state.mes}</label>
			  </div>
    		</form>
		</div>
		);
 	 }
}

const getLogin = state => {
    return {
        mes: state.update.login
    }
}

export default connect(
    getLogin, 
    { login }
)(Login)