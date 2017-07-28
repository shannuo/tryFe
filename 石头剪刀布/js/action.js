// JavaScript Document
var arr = ["images/石头.png","images/剪刀.png","images/布.png"];
var count = 0;
var player = function(id)
	{
		var e2 = document.getElementById("res");
		var s = sys();//系统出拳
		var res = id-s;//判断输赢
		if(res==-1||res==2)
		{
			e2.innerHTML = "you win!";
			count++;
		}
		if(res==1||res==-2)
		{
			e2.innerHTML = "you lost!";
		}
		if(res==0)
		{
			e2.innerHTML = "tied!";
		}
		document.getElementById('player').style.display = "none";
		document.getElementById('sys').style.display = "block";
		var e1 = document.getElementById("pl");//展示结果
		e1.src=arr[id];
		var e3 = document.getElementById("sy");
		e3.src=arr[s];
		document.getElementById('countp').innerHTML = "您获胜了"+count+"次！";//更新计数栏
	}
var sys = function()
	{
		var range = 2;
		var ran = Math.random();
		return Math.round(range*ran);
	}
var again = function()
{
	document.getElementById('sys').style.display = "none";
	document.getElementById('player').style.display = "block";
}