import { GETSUCCESS } from '../constants'  // 引入action类型名常量
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax
import {hashHistory} from 'react-router';

// 这里的方法返回一个action对象

//处理歌曲信息
export const getSuccess = (json) => {
    return {
        type: GETSUCCESS,
        data: json
    }
}

//获取歌曲信息
function fetchPosts(keyword) {
	var url = 'http://youxinyu.me:3000/search?keywords='+keyword;
    return dispatch => {
        return fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    	},
	})
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
				var action = getSuccess(data);
                dispatch(action)
            })
            .catch((e) => { console.log(e.message) })
        }
}

//搜索歌曲
export function fetchPostsIfNeeded(keyword) {
    return (dispatch, getState) => {
        return dispatch(fetchPosts(keyword))
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