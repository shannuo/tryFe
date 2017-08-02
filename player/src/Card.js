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
					<div className="card_box">
					  <img src={this.props.img} alt={this.props.title} />
					  <div  className="card_content">
						  <p>{this.props.time}</p>
						  <h3>{this.props.title}</h3>
						  <div>
						  	<span className="glyphicon glyphicon-play"></span>
							<span className="time">2:30</span>
							<span className="glyphicon glyphicon-share"></span>
						  </div>
					  </div>
				  	</div>
				</div>
        )
    }
}