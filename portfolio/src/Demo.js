// JavaScript Document
import React from 'react';
import './Demo.css';
import Card from './Card';

const project = [
{title:"音乐播放器",time:"2017-8-7",introduce:"使用react+redux+webpack编写的音乐播放器项目，使用了网易云音乐提供的API",img:"player.png",class:"page-header head3",url:"http://dengshushan.com/tryFe/player/build/"},
{title:"抓娃娃机",time:"2017-8-1",introduce:"一款支持移动端的抓娃娃小游戏，对准娃娃抓起后娃娃会有一点几率掉下去*-*",img:"zhuawawa.png",class:"page-header head3",url:"http://dengshushan.com/tryFe/抓娃娃机/"},
{title:"Portfolio",time:"2017-7-31",introduce:"使用React+Bootstrap编写的响应式网页",img:"portfolio.png",class:"page-header head3",url:"http://dengshushan.com/tryFe/portfolio/build/"},
{title:"2048",time:"2017-7-30",introduce:"2048小游戏,在电脑端由键盘上下左右控制，移动端由手势控制。该游戏色彩丰富（选了好久的颜色），有出现动画和合并动画",img:"2048.png",class:"page-header head",url:"http://dengshushan.com/tryFe/2048/"},
{title:"猜拳小游戏",time:"2017-7-28",introduce:"一个猜拳小游戏，玩家点击选择出拳，系统会随机出拳，玩家可以看到出拳结果以及猜拳胜利的局数",img:"stjdb.jpg",class:"page-header head1",url:"http://dengshushan.com/tryFe/%E7%9F%B3%E5%A4%B4%E5%89%AA%E5%88%80%E5%B8%83/"},
{title:"Resume",time:"2017-2-31",introduce:"使用Bootstrap编写的响应式网页",img:"resume.jpg",class:"page-header head1",url:"http://shannuo.github.io/resume/"},
];
const projects = project.map((key,index) => 
	{
		return <Card key={index.toString()} url={key.url} title={key.title} time={key.time} introduce={key.introduce} img={key.img} class={key.class} />
	});

export default class DemoComponent extends React.Component {
	 constructor(props) {
        super(props)
        this.state = {
			p:0,
			}
    }
	handleNext=()=>
	{
		if(this.state.p>Math.floor(projects.length/4)-1)
			alert("最后一页了！");
		else
			this.setState({p:this.state.p+1});
	}
	handlePre=()=>
	{
		if(this.state.p==0)
			alert("这是第一页哦！");
		else
		this.setState({p:this.state.p-1});
	}
 	 render() {
		var projects_p = projects.slice(0+this.state.p*4,4+this.state.p*4);
		return (
		  <div className="box">
		  		<div>
		  		{projects_p}
				</div>
				<div className="control">
				<button className="carousel-control left control" data-slide="prev" onClick={this.handlePre}><span className="glyphicon glyphicon-chevron-left"></span></button>
				<button className="carousel-control right control" data-slide="next" onClick={this.handleNext}><span className="glyphicon glyphicon-chevron-right"></span></button>
				</div>
		  </div>
		);
 	 }
	}