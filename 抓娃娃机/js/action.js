// JavaScript Document
var start = function()
{
	$(".pop").hide();
}

var restart = function()
{
	location.reload();
}

var cant = function()
{
	document.getElementById("res").innerHTML = "关不了哦，惊不惊喜，意不意外？还是开始游戏吧骚年，啊哈哈哈哈~";
}

var goPole = function()
{
	$("#change").animate({height:'460px'},2000);
	$("#change").animate({height:'100px'},2000);
	isWin($("#catch_box").width());
}

var isWin = function(width)
{
	var id = 0;
	switch (width){
		case 90:
			id = 3;
			break;
		case 330:
			id = 4;
			break;
		case 570:
			id = 2;
			break;
		case 770:
			id = 5;
			break;
		case 990:
			id = 6;
			break;
	}
	if(id!=0)
	{
		var t = Math.round(Math.random()*9);
		setTimeout(function(){
		$("#doll"+id+" img").animate({marginTop:'0px'},2000);
		},2000);
		if(t!=0)
		{
			setTimeout(function(){
			$("#doll"+id+" img").animate({marginTop:'400px'},1000);
			},2000);
			setTimeout("showRes(3)",5000);
		}
		else
			setTimeout("showRes(1)",4000);
	}
	else 
		setTimeout("showRes(2)",4000);
		
}

var showRes = function(t)
{
	if(t==1)
		document.getElementById("res").innerHTML = "恭喜你，抓到了一个可爱的娃娃哦，请再接再厉！重新开始抓请点击restart，继续游戏请点击start";
	if(t==2)
		document.getElementById("res").innerHTML = "拜托，对准一点好么！";
	if(t==3)
		document.getElementById("res").innerHTML = "哎呀，娃娃掉了！";
	$(".pop").show();
}

var isGo = function()
{
	if(a==1)
		return true;
	return false;
}

document.onkeydown = function(event){
    switch (event.keyCode) {
    case 37://left
		if(canMoveLeft())
        	$("#catch_box").animate({width:'-=20px'},100);
        break;
    case 39://right
		if(canMoveRight())
       		$("#catch_box").animate({width:'+=20px'},100);
        break;
	case 40://down
		goPole();
		break;
    }
}

var canMoveLeft = function()
{
    if($("#catch_box").css('width')=='30px')
		return false;
	return true;
}

var canMoveRight = function()
{
    if($("#catch_box").css('width')=='1130px')
		return false;
	return true;
}

//滑动
var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };
 
    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;
 
        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }
 
        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }
 
        return result;
    }
	var e1 = document.getElementById("box");
    //手指接触屏幕
    e1.addEventListener("touchstart", function(e) {
		event.preventDefault();
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    e1.addEventListener("touchend", function(e) {
		event.preventDefault();
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                break;
            case 3:
                if(canMoveLeft)
        			$("#catch_box").animate({width:'-=20px'});
				break;
            case 4:
            	if(canMoveRight)
       				$("#catch_box").animate({width:'+=20px'});
       			break;
			case 2:
				goPole();
            default:
        }
    }, false);