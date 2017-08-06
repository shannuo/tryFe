import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';// 引入connect 
import { fetchPostsIfNeeded } from './actions/count'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
			value:'小幸运'
        }
    }
	handleChange=(event)=> {
    this.setState({value: event.target.value});
  }
 	render() {
		const { fetchPostsIfNeeded } = this.props;
		var value = this.state.value;
		return (
		  <nav className="navbar navbar-default App">
			<div className="container-fluid">
			<div className="navbar-header">
				<a className="navbar-brand" href="">Ahri-珊</a>
				<img src='favicon.ico' className="App-logo" alt="logo" />
			</div>
			<div>
				<ul className="nav navbar-nav">
					<li className="dropdown"><Link to="/">Demo</Link></li>
					<li className="dropdown"><Link to="/lrc">Lrc</Link></li>
					<span className="search_music"><input type="text" value={value} onChange={this.handleChange} /></span>
					<button onClick={() => fetchPostsIfNeeded(this.state.value)}>搜索</button>
				</ul>
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