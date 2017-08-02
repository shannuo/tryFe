// JavaScript Document
import React from 'react';
import './Aboutme.css';
export default class AboutmeComponent extends React.Component {
	 constructor(props) {
        super(props)
        this.state = {}
    }
 	 render() {
		return (
		  <div className="aboutme">
		  	<div>
		  		<a href="https://shannuo.github.io">由于颜值问题，您无法查看AboutMe,详情请疯狂点击屏幕提升您的颜值* - *</a>
			</div>
		  </div>
		);
 	 }
	}