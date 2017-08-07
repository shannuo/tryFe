import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA, GETTEXT,GETLRC } from '../constants'  // 引入action类型名常量
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax

// 这里的方法返回一个action对象
export const increase = n => {
    return {
        type: INCREASE,
        amount: n
    }
}

export const decrease = n => {
    return {
        type: DECREASE,
        amount: n
    }
}

export const refreshData = () => {
    return {
        type: REFRESHDATA
    }
}

export const changetext = (s) => {
    return {
        type: GETTEXT,
		text: s
    }
}

export const changelrc = (s) => {
    return {
        type: GETLRC,
		text: s
    }
}

export const getSuccess = (json) => {
	var data = [];
	console.log(json);
	for(var i=0;i<json.result.songs.length;i++)
	{
		data[i] = {name:'',time:'',lrc:'',img:'',url:'',singer:'',id:''};
		if(!json.result.songs[''+i].hMusic)
			data[i].time = "00:00";
		else
			{
				var ms = json.result.songs[''+i].hMusic.playTime;
				var s = Math.floor(ms/1000);
				var m = Math.floor(s/60);
				data[i].time = ''+m+':'+(s%60);
			}
		if(!json.result.songs[''+i].album)
			data[i].img = "music01.jpg"
		else
			data[i].img = json.result.songs[''+i].album.blurPicUrl;
		data[i].name = json.result.songs[''+i].name;
	 	data[i].id = json.result.songs[''+i].id;
		data[i].url = fetchUrl(data[i].id);
		data[i].singer = json.result.songs[''+i].artists["0"].name;
	}
    return {
        type: GETSUCCESS,
        data
    }
}

function getUrl(id,img,name,time)
{
	var url = 'http://localhost:3000/music/url?id='+id;
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
				var res = {id:'',url:'',img:'',title:'',time:''}
				res.url = data.data["0"].url
				res.id = data.data["0"].id
				res.img = img
				res.id = id
				res.title = name
				res.time = time
				var action = changetext(res)
				dispatch(action)
				return data.data["0"].url;
            })
			.catch((e) => { console.log(e.message) })
        }
}

function getLrc(id)
{
	var url = 'http://localhost:3000/lyric?id='+id;
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
				var lrc = {lrc:''}
				lrc.lrc = data.lrc.lyric
				var action = changelrc(lrc)
				dispatch(action)
            })
			.catch((e) => { console.log(e.message) })
        }
}

function fetchPosts(keyword) {
	var url = 'http://localhost:3000/search?keywords='+keyword;
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

// 这里的方法返回一个函数进行异步操作
export function fetchPostsIfNeeded(keyword) {
    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么
    return (dispatch, getState) => {
        return dispatch(fetchPosts(keyword))
    }
}

export function fetchUrl(id,img,name,time) {
    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么
    return (dispatch, getState) => {
        return dispatch(getUrl(id,img,name,time))
    }
}

export function fetchLrc(id) {
    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么
    return (dispatch, getState) => {
        return dispatch(getLrc(id))
    }
}