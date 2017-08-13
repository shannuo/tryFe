// JavaScript Document
import React from 'react';
import { connect } from 'react-redux';// 引入connect 
import { changetime } from './actions/count';
import './Controller.css';

class Controller extends React.Component {
	  constructor(props) {
    super(props)
    this.state = {
      isPlay: false,
      allTime: 0,
      currentTime: 0
    }
  }
  
  millisecondToDate(time) {
    const second = Math.floor(time % 60)
    let minite = Math.floor(time / 60)
    // let hour
    // if(minite > 60) {
    //   hour = minite / 60
    //   minite = minite % 60
    //   return `${Math.floor(hour)}:${Math.floor(minite)}:${Math.floor(second)}`
    // }
    return `${minite}:${second >= 10 ? second : `0${second}`}`
  }

  controlAudio(type,value) {
    const audio = document.getElementById('audio')
    switch(type) {
      case 'allTime':
        this.setState({
          allTime: audio.duration
        })
        break
      case 'play':
        audio.play()
		//console.log(this.state.currentTime)
		this.timerID = setInterval(
		  () => this.props.changetime(this.state.currentTime),
		  1
		);
        this.setState({
          isPlay: true
        })
        break
      case 'pause':
        audio.pause()
		clearInterval(this.timerID);
        this.setState({
          isPlay: false
        })
        break
      case 'changeCurrentTime':
	  console.log(value)
        this.setState({
          currentTime: value
        })
        audio.currentTime = value
        if(value === audio.duration) {
          this.setState({
            isPlay: true
          })
        }
        break
      case 'getCurrentTime':
        this.setState({
          currentTime: audio.currentTime
        })
        if(audio.currentTime === audio.duration) {
          this.setState({
            isPlay: false
          })
        }
        break
	  default: 
	  	console.log("error");
    }
  }
 	 render() {
		const {text,changetime} = this.props
		return (
			<div className="play" onClick={this.handle}>
				<audio id="audio" src={text.url} onCanPlay={() => this.controlAudio('allTime')}
    onTimeUpdate={(e) => this.controlAudio('getCurrentTime')}></audio>
				<span className="icon glyphicon glyphicon-step-backward"></span>
				<span  className={this.state.isPlay ? 'icon glyphicon glyphicon-pause' : 'icon glyphicon glyphicon-play'} onClick={() => this.controlAudio(this.state.isPlay ? 'pause' : 'play')}></span>
				<span className="icon glyphicon glyphicon-step-forward"></span>
				<span className="icon1" onClick={() => changetime(this.state.currentTime)}>{text.title}</span>
				<span className="icon2">{this.millisecondToDate(this.state.currentTime)+'/'+this.millisecondToDate(this.state.allTime)}</span>
				<input type="range" step="0.01" max={this.state.allTime} value={this.state.currentTime} onChange={(value) => this.controlAudio('changeCurrentTime',value)} 
  />
			</div>
		);
 	 }
	}

const getText = state => {
    return {
        text: state.update.text
    }
}

export default connect(
    getText,
	{ changetime }
)(Controller)