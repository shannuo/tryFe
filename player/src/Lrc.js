// JavaScript Document
import React from 'react';
import './Lrc.css';

export default class Lrc extends React.Component {
	 constructor(props) {
        super(props)
        this.state = {
			lrc:"djalkdlksandkal",
			img:"music01.jpg",
			title:"猜拳小游戏"
		}
    }
 	 render() {
		return (
		  <div className="lrc">
		  	<div className="lrc_box">
			<img src={this.state.img} alt={this.state.title} />
			</div>
			<div className="lrc_p">
			<p>不敢回看，左顾右盼不自然的暗自喜欢。</p>
			<p>偷偷搭讪总没完的坐立难安</p>
			<p>自叹说晚安多难堪又为难</p>
			<p>释然，慵懒，尽欢，时间，风干后你与我在无关</p>
			<p>没答案怎么办看不惯自我欺瞒</p>
		  	</div>
		  </div>
		);
 	 }
	}