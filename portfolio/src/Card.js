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
				<div className="col-sm-3 col-xs-12 card">
					<div className="card_content">
						<div className={this.props.class}>
							<h1><a href={this.props.url} target="_blank">{this.props.title}</a>
								<small>{this.props.time}</small>
							</h1>
						</div>
						<p>{this.props.introduce}</p>
						<img src={this.props.img} alt={this.props.title} />
					</div>
				</div>
        )
    }
}