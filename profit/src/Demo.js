// JavaScript Document
import React from 'react';
import './Demo.css';
import Card from './Card';

const project = [
{title:"猜拳小游戏",time:"2017-7-28",introduce:"一个猜拳小游戏，玩家点击选择出拳，系统会随机出拳，玩家可以看到出拳结果以及猜拳胜利的局数。",img:"stjdb.gif",class:"page-header head1",url:"http://dengshushan.com/tryFe/%E7%9F%B3%E5%A4%B4%E5%89%AA%E5%88%80%E5%B8%83/"},
{title:"2048",time:"2017-7-30",introduce:"2048小游戏,在电脑端由键盘上下左右控制，移动端由手势控制。该游戏色彩丰富（选了好久的颜色），有出现动画和合并动画。",img:"2048.gif",class:"page-header head",url:"http://dengshushan.com/tryFe/2048/"},
{title:"Profit",time:"2017-7-31",introduce:"使用React+Bootstrap编写的响应式网页",img:"profit.png",class:"page-header head3",url:"http://dengshushan.com/tryFe/profit/"},
{title:"Resume",time:"2017-2-31",introduce:"使用Bootstrap编写的响应式网页",img:"resume.jpg",class:"page-header head1",url:"http://shannuo.github.io/resume/"}
];
const projects = project.map((key,index) => 
	{
		return <Card key={index.toString()} url={key.url} title={key.title} time={key.time} introduce={key.introduce} img={key.img} class={key.class} />
	});

export default class DemoComponent extends React.Component {
	 constructor(props) {
        super(props)
        this.state = {}
    }
 	 render() {
		return (
		  <div className="box">
		  		{projects}
				<div className="col-sm-12 col-xs-12 foot">foot</div>
		  </div>
		);
 	 }
	}