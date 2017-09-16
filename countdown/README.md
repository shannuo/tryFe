## 验证码登录组件

#### 这是一个使用React编写的包含倒计时的短信验证码登录组件。

### 在线演示地址

[http://dengshushan.com/tryFe/countdown/bulid](http://dengshushan.com/tryFe/countdown/bulid)

### 功能

#### 自定义文案

你可以设置倒计时时间并自定义提示内容。

#### 输入内容验证

用户输入的手机号与验证码都会进行格式验证

#### 多状态按钮

发送验证码以及登录按钮均有多种状态，在可使用状态下才允许点击

#### 按钮倒计时

点击发送验证码按钮，会进行倒计时，倒计时期间按钮以及手机号输入框均不可用

#### 重置机制

当倒计时结束或发送验证码失败或者登录成功，按钮状态将会重置

#### 提示动画

提示框将以动画的形式出现

#### 依赖

- react
- react-dom
- react-scripts
- react-test-renderer
- bootstrap
- enzyme

### 安装

{% highlight javascript %}
    	
git clone git@github.com:shannuo/countdown.git
cd countdown
npm start
	 
{% endhighlight %}

### 使用

#### 方法1

{% highlight javascript %}
    	
<App init={
				nums:20,												// 倒计时时间(以秒为单位的大于10的整数)
				testError:'手机号填写错误！',								// 手机号检测不通过
				codeError:'验证码发送失败！',							// 验证码发送失败
				codeSuccess:'验证码发送成功啦，看到就在这填写哦~',		// 验证码发送成功
				disableClick:'先把手机号填正确好吗0.0',					// 手机号未通过点击发送验证码
				sendingClick:'再等等哦，很快就能收到了~',				// 倒计时未结束点击发送验证码		
				codeNullError:'验证码不能为空！',						// 未填写验证码登录
				phoneNullError:'手机号不能为空！',						// 未填写手机号登录
				codeTestError:'验证码格式应为6位数字哦~'	,			//验证码检测不通过
				loginError:'还不可以点哦~',								//登录按钮不可用时点击
				loginSuccess:'登录成功！'								//登陆成功提示
			} />
	 
{% endhighlight %}

#### 方法2

1.修改项目中./src/Config.js 文件中对应值

2.
{% highlight javascript %}

 import init from './Config';
<App init={init} />
	 
{% endhighlight %}

### 测试

{% highlight javascript %}
    	
npm run build
	 
{% endhighlight %}

### 联系我

Email:dengshushan@qq.com