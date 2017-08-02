import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
 	render() {
		return (
		  <nav className="navbar navbar-default App">
			<div className="container-fluid">
			<div className="navbar-header">
				<a className="navbar-brand" href="">Ahri-珊</a>
				<img src='./favicon.ico' className="App-logo" alt="logo" />
			</div>
			<div>
				<ul className="nav navbar-nav">
					<li className="dropdown"><Link to="/">Demo</Link></li>
					<li className="dropdown"><Link to="/about">About Me</Link></li>
				</ul>
			</div>
			</div>
			<div>{this.props.children}</div>
		  </nav>
		);
 	 }
}
export default App;
