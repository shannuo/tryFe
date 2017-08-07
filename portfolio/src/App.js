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
			<div className="nav_content">
			<div className="navbar-header">
				<a className="navbar-brand collapse navbar-collapse is-collapse" href="">Ahri-珊</a>
			</div>
			<div className="link">
				<ul className="nav navbar-nav">
					<li className="drop"><Link to="/">前端小项目</Link></li>
					<li className="drop"><Link to="/about">About Me</Link></li>
				</ul>
			</div>
			</div>
			<div>{this.props.children}</div>
		  </nav>
		);
 	 }
}
export default App;
