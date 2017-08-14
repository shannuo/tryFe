// JavaScript Document
import React from 'react';
import { connect } from 'react-redux';// 引入connect 
import './Lrc.css';

class Lrc extends React.Component {
	 constructor(props) {
        super(props)
        this.state = {
			lrcs_now: '',
			lrcs_pre:'',
		}
    }
  	componentDidMount() {
		this.timerID = setInterval(
		  () => this.updateLrc(),
		  1
		);
	}
	componentWillUnmount() {
    	clearInterval(this.timerID);
  	}
	updateLrc(){
		var bling = document.getElementById('lrc_p').firstChild;
		if(bling)
		{
			bling.style.color = "#bce672";
		}
		var notime = [];
		var p = 0;
		if(this.props.lrc[Math.round(this.props.currenttime)]||this.props.currenttime===0)
		{
			const lrcs = this.props.lrc.map((key,index)=>
			{
				if(key)
					notime.push(key);
				return <p key={index}>{key}</p>;
			});
			var lrcs_now = lrcs.slice(Math.round(this.props.currenttime),lrcs.length);
			//console.log(this.props.currenttime)
			this.setState({
			  lrcs_now: lrcs_now
			});
		}
	}
 	 render() {
		const { text,lrc,currenttime } = this.props;
		return (
		  <div className="lrc">
		  	<div className="lrc_box">
			<img src={text.img} alt={text.title} />
			</div>
			<div id="lrc_p" className="lrc_p">
			{this.state.lrcs_now}
		  	</div>
		  </div>
		);
 	 }
	}
	
const getText = state => {
    return {
        text: state.update.text,
		lrc:state.update.lrc,
		currenttime:state.update.currenttime
    }
}

export default connect(
    getText
)(Lrc)