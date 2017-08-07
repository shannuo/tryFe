// JavaScript Document
import React from 'react';
import { connect } from 'react-redux';// 引入connect 
import './Lrc.css';

class Lrc extends React.Component {
	 constructor(props) {
        super(props)
        this.state = {
		}
    }
 	 render() {
		const { text,lrc } = this.props;
		return (
		  <div className="lrc">
		  	<div className="lrc_box">
			<img src={text.img} alt={text.title} />
			</div>
			<div className="lrc_p">
			<p>{lrc.lrc}</p>
		  	</div>
		  </div>
		);
 	 }
	}
	
const getText = state => {
    return {
        text: state.update.text,
		lrc:state.update.lrc
    }
}

export default connect(
    getText
)(Lrc)