import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';// 引入connect 
import { fetchPostsIfNeeded } from './actions/count'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
			value:'陈绮贞',
			class: 'collapse navbar-collapse',
			liked: true
        }
    }
	handleChange=(event)=> 
	{
    	this.setState({value: event.target.value});
	}
	hand=(event)=>
	{
		if(this.state.liked)
			this.setState({liked: false,class:''});
		else
			this.setState({liked: true,class:'collapse navbar-collapse'});
	}

 	render() {
		const { fetchPostsIfNeeded } = this.props;
		var value = this.state.value;
		return (
		  <nav className="navbar navbar-default App">
			<div className="container-fluid">
			<div className="navbar-header">
				<a className="navbar-brand" href="">Ahri-珊
				</a>
				<img src='favicon.ico' className="App-logo" alt="logo" />
				<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" onClick={this.hand}>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
			</div>
			<div className={this.state.class}>
				<ul className="nav navbar-nav">
					<li className="dropdown"><Link to="/" onClick={this.hand}>Demo</Link></li>
					<li className="dropdown"><Link to="/lrc" onClick={this.hand}>Lrc</Link></li>
				</ul>
				<div className="navbar-form navbar-right">
					<span ><input type="text" value={value} onChange={this.handleChange} /></span>
					<Link to="/"><button onClick={() => fetchPostsIfNeeded(this.state.value)}><span  onClick={this.hand}>搜索</span></button></Link>
				</div>
			</div>
			</div>
			<div>{this.props.children}</div>
		  </nav>
		);
 	 }
}

const getList = state => {
    return {
        lists: state.update.data
    }
}

export default connect(
    getList, 
    {fetchPostsIfNeeded}
)(App)