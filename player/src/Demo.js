// JavaScript Document
import React from 'react';
import './Demo.css';
import Card from './Card';
import { connect } from 'react-redux';// 引入connect 

class Demo extends React.Component {
	 constructor(props) {
        super(props)
        this.state = {}
    }
 	 render() {
		const { data } = this.props;
		return (
		  <div className="box">
		  		{data.map((key,index) => 
				<Card key={index.toString()} url={key.url} name={key.name} time={key.time} lrc={key.lrc} img={key.img} id={key.id} singer={key.singer} />
				)}
		  </div>
		);
 	 }
	}
const getData = state => {
    return {
        data: state.update.data
    }
}

export default connect(
    getData
)(Demo)