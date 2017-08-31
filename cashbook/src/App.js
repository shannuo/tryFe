import React, { Component } from 'react';
import {hashHistory,Link} from 'react-router';
import { connect } from 'react-redux';// 引入connect 
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
			class: 'collapse navbar-collapse',
			class1: 'navbar-form navbar-right',
			liked: true
        }
    }
	hand=(event)=>
	{
		if(this.state.liked)
			this.setState({liked: false,class:'',class1:'nav navbar-nav search'});
		else
			this.setState({liked: true,class:'collapse navbar-collapse',class1:'navbar-form navbar-right'});
	}
	componentDidMount()
	{
		var url = hashHistory.getCurrentLocation().pathname
    	if(!this.props.username&&url!=='/Login')
			hashHistory.push('/Login');
	}

 	render() {
		return (
		  <nav className="navbar navbar-default App">
			<div className="container-fluid">
			<div className="navbar-header">
				<span className="navbar-brand" href="">Ahri-珊 记账本 <small><Link className="dropdown" to="/Login">{this.props.username ? this.props.username : '登录'}</Link></small></span>
				<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" onClick={this.hand}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
			</div>
			<div className={this.state.class}>
				<ul className="nav navbar-nav">
					<li className="dropdown"><Link to="/" onClick={this.hand}>账单</Link></li>
					<li className="dropdown"><Link to="/Controller" onClick={this.hand}>记账</Link></li>
				</ul>
			</div>
			</div>
		  </nav>
		);
 	 }
}

const getUser = state => {
    return {
        username: state.update.username
    }
}

export default connect(
    getUser
)(App)