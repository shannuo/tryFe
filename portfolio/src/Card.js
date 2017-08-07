// JavaScript Document
import React from 'react';
import './Demo.css';
export default class CardComponent extends React.Component{
	constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
    render(){
        return(
				<div className="col-sm-3 col-xs-6 card">
					<div className="card_content">
						<a href={this.props.url} target="_blank"><img src={this.props.img} alt={this.props.title} /></a>
						<div className="content">
							<h1><a href={this.props.url} target="_blank">{this.props.title}</a></h1>
							<h4>{this.props.time}</h4>
						</div>
						<p>{this.props.introduce}</p>
					</div>
				</div>
        )
    }
}