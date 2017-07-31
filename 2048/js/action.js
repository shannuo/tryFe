// JavaScript Document
var nums = new Array();
for(var i = 0;i<4;i++)
{
	nums[i] = new Array();
	for(var j = 0;j<4;j++)
	{
		nums[i][j] = 0;
	}
}
var start = function()
{
	restart();
	$(".pop").hide();
	newNumber(2);
	newNumber(2);
}
document.onkeydown = function(event){
    switch (event.keyCode) {
    case 37://left
        if(moveLeft()){
            newNumber(2);//每次新增一个数字就可能出现游戏结束
            isgameover();
        }
        break;
    case 38://up
        if(moveUp()){
            newNumber(2);//每次新增一个数字就可能出现游戏结束
            isgameover();
        }
        break;
    case 39://right
        if(moveRight()){
            newNumber(2);//每次新增一个数字就可能出现游戏结束
            isgameover();
        }
        break;
    case 40://down
        if(moveDown()){
            newNumber(2);//每次新增一个数字就可能出现游戏结束
            isgameover();
        }
        break;

    }
}
var newNumber = function(t)
{
	var num;//值
	var Cx;//横坐标
	var Cy;//竖坐标
	while(true){
		Cx = Math.round(Math.random()*3);
		Cy = Math.round(Math.random()*3);
		if (nums[Cx][Cy] == 0) 
            break;
    }
	num = Math.round(Math.random()*1+1)*2;
	////console.log(Cx,Cy);
	nums[Cx][Cy] = num;
	showNum(num,Cx,Cy,t);
}
var showNum = function(num,Cx,Cy,t)
	{
		var id = "c"+Cx.toString()+Cy.toString();
		var cl = "c"+num.toString();
		var e = document.getElementById(id);
		e.innerHTML = num;
		e.className = "col-xs-3 col-sm-3 "+cl;
		if(t==2)
		{
			e.style.cssText = "height:100px;width:100px;margin:35px;opacity:0.1;";
			$("#"+id).animate({width:"150px",height:"150px",margin:"10px",opacity:1},300);
		}
		if(t==1)
		{
			$("#"+id).animate({width:"155px",height:"155px",margin:"5px",opacity:0.5},300);
			$("#"+id).animate({width:"150px",height:"150px",margin:"10px",opacity:1},300);
		}
		/*if(t==3)
		{
			$("#"+id).animate({left:"150px"},500);
			$("#"+id).animate({left:"0px"},500);
		}*/
	}
var showNull = function(Cx,Cy)
	{
		var id = "c"+Cx.toString()+Cy.toString();
		var cl = "cell";
		var e = document.getElementById(id);
		e.innerHTML = "";
		e.className = "col-xs-3 col-sm-3 "+cl;
		////console.log(nums);
	}
var nospace = function() //判断是否还有空间
	{
		for (var i=0;i<4;i++) 
			for (var j=0; j<4; j++) 
				if (nums[i][j] == 0)
					return false;
		return true;
	}
var isgameover = function()
{
    if(nospace()&&nomove())
		{
			//console.log(nums);
        	gameover();
		}
}
var cant = function()
{
	document.getElementById("res").innerHTML = "关不了哦，惊不惊喜，意不意外？还是开始游戏吧骚年，啊哈哈哈哈~";
}
var gameover = function()
{
    document.getElementById("res").innerHTML = "你又死了呀，好菜哦，再玩一次证明你自己吧";
	$(".pop").show();
}
var canMoveLeft = function()
{
    for(var i=0;i<4;i++)
        for(var j=1;j<4;j++)
            if(nums[i][j]!=0)
                if(nums[i][j-1]==0||nums[i][j-1]==nums[i][j])
                    return true;              
    return false;
}
var canMoveRight = function()
{
    for(var i=0;i<4;i++)
        for(var j=0;j<3;j++)
            if(nums[i][j]!=0)
                if(nums[i][j+1]==0||nums[i][j+1]==nums[i][j])
                    return true;              
    return false;
}
var canMoveUp = function()
{
    for(var i=1;i<4;i++)
        for(var j=0;j<4;j++)
            if(nums[i][j]!=0)
                if(nums[i-1][j]==0||nums[i-1][j]==nums[i][j])
                    return true;              
    return false;
}
var canMoveDown = function()
{
    for(var i=0;i<3;i++)
        for(var j=0;j<4;j++)
            if(nums[i][j]!=0)
                if(nums[i+1][j]==0||nums[i+1][j]==nums[i][j])
                    return true;              
    return false;
}
var nomove = function()
{
    if(canMoveLeft()|| canMoveRight()||canMoveUp()||canMoveDown())
        return false;
    return true;
}
var moveLeft = function()
{
	if( !canMoveLeft())
        return false;
	for(var i=0;i<4;i++)
        for(var j=1;j<4;j++)
		{//第一列的数字不可能向左移动
            if(nums[i][j]!=0)
			{
                //(i,j)左侧的元素
                for(var k=0;k<j;k++)
				{
                    //落脚位置的是否为空 && 中间没有障碍物
                    if(nums[i][k]==0&&noBlockHorizontal(i,k,j))
					{
                        //move
                        //showMoveAnimation(i, j,i,k);
						//showNum(nums[i][j],i,j,3);
                        nums[i][k] = nums[i][j];
                        nums[i][j] = 0;
                        continue;
                    }
                    //落脚位置的数字和本来的数字相等 && 中间没有障碍物
                    else if(nums[i][k]==nums[i][j]&&noBlockHorizontal(i,k,j))
					{
                        //move
                        //showMoveAnimation(i, j,i,k);
                        //add
                        nums[i][k] += nums[i][j];
                        nums[i][j] = 0;   
						showNum(nums[i][k],i,k,1);
                        continue;
                    }
                }
            }
        }
	updateView();
	return true;
}
var moveRight = function()
{
	if( !canMoveRight())
        return false;
	for(var i=0;i<4;i++)
        for(var j=2;j>=0;j--)
		{//最后一列的数字不可向右移动
            if(nums[i][j]!=0)
			{
                //(i,j)右侧的元素
                for(var k=j+1;k<4;k++)
				{
					////console.log(nums[i][k],noBlockHorizontal(i,j,k),[j,k],[i,j],nums[i][j]);
                    //落脚位置的是否为空 && 中间没有障碍物
                    if(nums[i][k]==0&&noBlockHorizontal(i,j,k))
					{
                        //move
                        //showMoveAnimation(i, j,i,k);
                        nums[i][k] = nums[i][j];
                        nums[i][j] = 0;
						j++;
                        continue;
                    }
                    //落脚位置的数字和本来的数字相等 && 中间没有障碍物
                    else if(nums[i][k]==nums[i][j]&&noBlockHorizontal(i,j,k))
					{
                        //move
                        //showMoveAnimation(i, j,i,k);
                        //add
                        nums[i][k] += nums[i][j];
                        nums[i][j] = 0;    
						showNum(nums[i][k],i,k,1); 
                        continue;
                    }
                }
            }
        }
	updateView();
	return true;
}
var moveUp = function()
{
	if( !canMoveUp())
        return false;
	for(var i=1;i<4;i++)
        for(var j=0;j<4;j++)
		{//第一行的数字不可向上移动
            if(nums[i][j]!=0)
			{
                //(i,j)上侧的元素
                for(var k=0;k<i;k++)
				{
                    //落脚位置的是否为空 && 中间没有障碍物
                    if(nums[k][j]==0&&noBlockHorizontal1(j,k,i))
					{
                        //move
                        //showMoveAnimation(i, j,i,k);
                        nums[k][j] = nums[i][j];
                        nums[i][j] = 0;
                        continue;
						////console.log(nums);
                    }
                    //落脚位置的数字和本来的数字相等 && 中间没有障碍物
                    else if(nums[k][j]==nums[i][j]&&noBlockHorizontal1(j,k,i))
					{
                        //move
                        //showMoveAnimation(i, j,i,k);
                        //add
                        nums[k][j] += nums[i][j];
                        nums[i][j] = 0;     
						showNum(nums[k][j],k,j,1);
                        continue;
						////console.log(nums);
                    }
                }
            }
        }
	updateView();
	return true;
}
var moveDown = function()
{
	if( !canMoveDown())
        return false;
	for(var i=2;i>=0;i--)
        for(var j=0;j<4;j++)
		{//最后一行的数字不可向上移动
            if(nums[i][j]!=0)
			{
                //(i,j)下侧的元素
                for(var k=i+1;k<4;k++)
				{
					//console.log(nums[i][k],noBlockHorizontal(i,j,k),[j,k],[i,j],nums[i][j]);
                    //落脚位置的是否为空 && 中间没有障碍物
                    if(nums[k][j]==0&&noBlockHorizontal1(j,i,k))
					{
						//alert(1);
                        //move
                        //showMoveAnimation(i, j,i,k);
                        nums[k][j] = nums[i][j];
                        nums[i][j] = 0;
						i++;
                        continue;
						////console.log(nums);
                    }
                    //落脚位置的数字和本来的数字相等 && 中间没有障碍物
                    else if(nums[k][j]==nums[i][j]&&noBlockHorizontal1(j,i,k))
					{
						//alert(k);
						//alert(j);
                        //move
                        //showMoveAnimation(i, j,i,k);
                        //add
                        nums[k][j] += nums[i][j];
                        nums[i][j] = 0;     
						showNum(nums[k][j],k,j,1);
                        continue;
						////console.log(nums);
                    }
                }
            }
        }
	updateView();
	return true;
}
var updateView = function()
{
	var iswin = false;
	for(var i=0;i<4;i++)
	{
		for(var j=0;j<4;j++)
		{
			if(nums[i][j]==2048)
				iswin = true;
			if(nums[i][j]==0)
				showNull(i,j);
			else
				showNum(nums[i][j],i,j,0);
		}
	}
	if(iswin)
	{
		winTheGame();
	}
}
var winTheGame = function()
{
	document.getElementById("res").innerHTML = "你赢了！！你竟然赢了，突然有点小崇拜你0.0";
	$(".pop").show();
	restart();
}
var restart = function()
{
	for(var i = 0;i<4;i++)
	{
		for(var j = 0;j<4;j++)
		{
			nums[i][j] = 0;
		}
	}
	updateView();
}
function noBlockHorizontal(row,col1,col2){
    for(var i=col1+1;i<col2;i++)
        if(nums[row][i]!=0)
            return false;
    return true;
}
function noBlockHorizontal1(con,col1,col2){
    for(var i=col1+1;i<col2;i++)
        if(nums[i][con]!=0)
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
            case 1:
                if(moveUp())
				{
				newNumber();//每次新增一个数字就可能出现游戏结束
				isgameover();
				}
				break;
            case 2:
                if(moveDown())
				{
				newNumber();//每次新增一个数字就可能出现游戏结束
				isgameover();
				}
				break;
            case 3:
                if(moveLeft())
				{
				newNumber();//每次新增一个数字就可能出现游戏结束
				isgameover();
				}
				break;
            case 4:
                if(moveRight())
				{
				newNumber();//每次新增一个数字就可能出现游戏结束
				isgameover();
				}
				break;
            default:
        }
    }, false);