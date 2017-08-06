// JavaScript Document
import React from 'react';
import './Demo.css';
import Card from './Card';
import { connect } from 'react-redux';// 引入connect 

const project = [
{name:"松子糖的回忆",time:"00：05：12",lrc:"青青小巷，石板铺了几许几长",img:"music01.jpg",url:"松子糖的回忆-珊.wav",singer:''},
{name:"燕归巢-萌珊",time:"00：05：12",lrc:"寒梅落尽把东了，衔春的燕想归巢",img:"music01.jpg",url:"燕归巢-萌珊.MP3",singer:''},
{name:"松子糖的回忆",time:"00：05：12",lrc:"青青小巷，石板铺了几许几长",img:"music01.jpg",url:"松子糖的回忆-珊.wav",singer:''},
{name:"松子糖的回忆",time:"00：05：12",lrc:"青青小巷，石板铺了几许几长",img:"music01.jpg",url:"松子糖的回忆-珊.wav",singer:''}
];

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
				<Card key={index.toString()} url={key.url} name={key.name} time={key.time} lrc={key.lrc} img={key.img} id={key.id} />
				)}
				<div className="col-sm-12 col-xs-12 foot">foot</div>
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