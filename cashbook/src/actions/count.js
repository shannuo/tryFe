import { GETSUCCESS,GETBILL } from '../constants'  // 引入action类型名常量
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax
import {hashHistory} from 'react-router';

// 这里的方法返回一个action对象

//处理用户信息
export const getSuccess = (json) => {
    return {
        type: GETSUCCESS,
        data: json
    }
}
//处理账单信息
export const getBill = (json) => {
    return {
        type: GETBILL,
        data: json
    }
}

//登录注册

function fetchUser(username,password,method) {
	var url;
	if(method===1)
		url = 'http://localhost:3000/users';
	else
		url = 'http://localhost:3000';
	var data = {username:username,password:password}
    return dispatch => {
        return fetch(url, {
			method: 'Post',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				},
			body: "username="+data.username+"&password="+data.password
			})
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
				//console.log(data);
				var res = {username:'',login:''}
				if(data==='登陆成功!')
				{
					res.username = username;
					res.login = '';
					hashHistory.push('/');
				}
				else
					res.login = data;
				console.log(res);
				var action = getSuccess(res);
                dispatch(action);
            })
            .catch((e) => { console.log(e.message) })
        }
}

export function login(username,password,method) {
    return (dispatch, getState) => {
        return dispatch(fetchUser(username,password,method))
    }
}

//获取用户账单

function fetchBill(time) {
	var	url = 'http://localhost:3000/showaccount/'+time;
    return dispatch => {
        return fetch(url, {
			method: 'GET',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				}
			})
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
				console.log(data);
				//处理日期和总支出收入
				var income = 0;
				var outcome = 0;
				for(var i=0;i<data.length;i++)
				{
					var arr = data[i].createtime.split('T');
					data[i].createtime = arr[0];
					if(data[i].income==='支出')
						outcome += data[i].money;
					else
						income += data[i].money;
				}
				data.outcome = outcome;
				data.income = income;
				var action = getBill(data);
                dispatch(action);
            })
            .catch((e) => { console.log(e.message) })
        }
}

export function bill(time) {
    return (dispatch, getState) => {
        return dispatch(fetchBill(time))
    }
}