import React, { Component } from 'react';
import './App.css';
import init from './Config';

class App extends Component {
  constructor(props) {
	  super(props)
	  this.state = {
		  nums:init.nums,
		  phone:'',		// 手机号码
		  code:'',		// 验证码
		  tip:'',		// 提示信息
		  class1:'',	// 第一条提示信息样式
		  class2:'',	// 第二条提示信息样式
		  iconClass:'input-group-addon glyphicon glyphicon-phone',		//图标样式
		  countdown:'发送验证码',	// 倒计时按钮值
		  class:'disable',		// 倒计时按钮样式(disable:不可发送,able:可发送,sending:倒计时中)
		  status:'disable',		// 倒计时按钮状态(disable:不可发送,able:可发送,sending:倒计时中)
		  login:'disable'		// 登陆按钮样式(disable:不可登录,able:可登陆）
	  }
  }
  handlePhone=(event)=>{
	  // 倒计时按钮处于倒计时未结束状态时手机号不能修改
	  if(this.state.status==='sending')
	  	return false;
	  this.setState({
	  	phone:event.target.value
	  });
	  //验证手机号
	  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	  if(myreg.test(event.target.value)){ 
		  this.setState({
			status:'able',
			class:'able'	 
		  });
	  }
	  else{
		  this.setState({
			status:'disable',
			class:'disable'		 
		  });
	  } 
  }
  handleCode=(event)=>{
	  this.setState({
	  	code:event.target.value
	  });
  }
  // 点击input框获得提示
  handleHide=(event)=>{
	  switch(event.target.name){
		  case 'phone':
		  	this.setState({
			  class1:'',
			  class2:'',
			  iconClass:'input-group-addon glyphicon glyphicon-phone',
			});
			break;
		  case 'code':	
		  	if(this.state.status==='disable'){
				this.setState({
				  tips:init.testError,
				  class1:'show shake',
				  iconClass:'input-group-addon glyphicon glyphicon-exclamation-sign red'
				});
			}
		  	this.setState({
			  class2:''
			});
			break;
		  default:
		  	break;
	  }
  }
  // 点击发送验证码
  handleSend=(event)=>{
	  switch(this.state.status){
		  // 按钮处于可发送状态发送并倒计时
		  case 'able':
		  	var phone = this.state.phone;
			this.setState({
			  class:'sending',
			  class1:'',
			  class2:'',
			  iconClass:'input-group-addon glyphicon glyphicon-phone',
			  status:'sending',
			  countdown:'重新发送(' + this.state.nums + 's)'
			});
			// 倒计时开启
			this.clock = setInterval(
					() => this.doLoop(), 
					1000
			);
			// ajax发送验证码
			/*
			var url = "http://localhost:3000";
			fetch(url,{
						  method:'POST',
						  mode:'cors',
						  credentials:'include',
						  headers:{
							  'Content-Type': 'application/x-www-form-urlencoded'
						  },
						  body:"phone="+phone
				  })
				  .then((res) => { console.log(res.status); return res.json() })
				  .then((data) => {
					if(res===0){
						this.setState({
						  class2:'show shake',
						  tips:init.codeError
						});
						this.resetButton();
					}
					else
						this.setState({
						  class2:'show boost',
						  tips:init.codeSuccess,
						  login:'able'
						});
				  })
				  .catch((e) => { console.log(e.message) })
			*/
			// 模拟发送请求到后端
			setTimeout(
				()=>{
					var res = this.response(phone);
					// 发送失败,倒计时按钮重置
					if(res===0){
						this.setState({
						  class2:'show shake',
						  tips:init.codeError
						});
						this.resetButton();
					}
					// 发送成功，登录按钮可点击，并提示用户输入验证码
					else
						this.setState({
						  class2:'show boost',
						  tips:init.codeSuccess,
						  login:'able'
						});
				},
				10000
			);
			break;
		  // 按钮处于不可点击状态，点击后提示
		  case 'disable':
		  	this.setState({
			  class1:'show shake',
			  class2:'',
			  iconClass:'input-group-addon glyphicon glyphicon-exclamation-sign red',
			  tips:init.disableClick
			});
			break;
		  // 按钮处发送状态，点击后提示
		  case 'sending':
		  	this.setState({
			  class2:'show shake',
			  tips:init.sendingClick
			});
			break;
		  default:
            break;
	  }	  
  }
  // 倒计时实现
  doLoop(){
	  var nums = this.state.nums;
	  nums--;
	  this.setState({
		  nums:nums
	  });
	  if(nums > 0){
		this.setState({
		  countdown:'重新发送(' + nums + 's)'
		});
	  }
	  else{
		this.resetButton();
	  }
  }
  // 按钮重置置登陆按钮
  resetButton(){
	  clearInterval(this.clock);	// 清除js定时器
	  this.setState({
		countdown:'发送验证码',
		class:'able',
		status:'able',
		nums:init.nums,	// 重置时间
	  });
  }
  // 模拟后端返回数据,返回0：发送失败，返回1：发送成功
  response(num){
	  if(num==='15805173350')
	  	return 1;
	  else if(num==='18776623153')
	  	return 0;
	  // 随机返回0,1
	  else
	  	return Math.round(Math.random()*1);
  }
  // 点击登录按钮
  handleLogin=(event)=>{
	  if(!this.state.phone)
	  	this.setState({
		  class1:'show shake',
		  iconClass:'input-group-addon glyphicon glyphicon-exclamation-sign red',
		  tips:init.phoneNullError
		});
	  else if(!this.state.code)
	  	this.setState({
		  class2:'show shake',
		  tips:init.codeNullError
		});
	  else if(this.state.login!=='able')
	  	alert("还不可以点哦");
	  else
	  	alert("登录成功！");
  }
  render() {
    return (
		<div className="father">
			<div className="box">
			  <h1 className="title">验证码登录</h1>
			  <div className="input-group input-group-lg input-css">
				<span className={this.state.iconClass}></span>
				<input type="text" id="shake" name="phone" className="form-control " placeholder="请输入手机号" value={this.state.phone} onChange={this.handlePhone} onFocus={this.handleHide} />
			  </div>
			  <div className={"tips shake clearfix " + this.state.class1}>
				<span className="triangle"></span>
				<div className="article">{this.state.tips}</div>
			  </div>
			  <div className="input-group input-group-lg input-css">
				<input type="text" name="code" className="form-control" placeholder="请输入验证码" value={this.state.code} onFocus={this.handleHide} onChange={this.handleCode} />
				<span className={"input-group-addon  " + this.state.class} onClick={this.handleSend}>{this.state.countdown}</span>
			  </div>
			  <div className={"tips second clearfix " + this.state.class2}>
				<span className="triangle"></span>
				<div className="article">{this.state.tips}</div>
			  </div>
			  <div className="form-btn input-group-lg">
				  <input type="button" className={"form-control btn-success " + this.state.login} value="登录" onClick={this.handleLogin} />
			  </div>
			</div>
		</div>
    );
  }
}

export default App;