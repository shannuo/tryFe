import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA, GETTEXT, GETLRC, GETTIME } from '../constants'  // 引入action类型名常量
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

//更新歌曲播放链接
export const changetext = (s) => {
    return {
        type: GETTEXT,
		text: s
    }
}

//更新播放进度
export const changetime = (s) => {
    return {
        type: GETTIME,
		currenttime: s
    }
}

//更新歌词
export const changelrc = (s) => {
    return {
        type: GETLRC,
		text: s
    }
}

//处理歌曲信息
export const getSuccess = (json) => {
	var data = [];
	//console.log(json);
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

//获取歌曲播放链接
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

//获取歌词
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
				var lrc = {}
				var temp_lrc = parseLyric(data.lrc.lyric)
				//console.log(temp_lrc)
				lrc = temp_lrc
				var action = changelrc(lrc)
				dispatch(action)
            })
			.catch((e) => { console.log(e.message) })
        }
}

//处理歌词
function parseLyric(lrc) {
    var lyrics = lrc.split("\n");
    var lrcObj = [];
    for(var i=0;i<lyrics.length;i++){
        var lyric = decodeURIComponent(lyrics[i]);
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        var timeRegExpArr = lyric.match(timeReg);
        if(!timeRegExpArr)continue;
        var clause = lyric.replace(timeReg,'');
        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
            var t = timeRegExpArr[k];
            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                sec = Number(String(t.match(/\:\d*/i)).slice(1));
            var time = min * 60 + sec;
            lrcObj[time] = clause;
        }
    }
    return lrcObj;
}

//获取歌曲信息
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

//搜索歌曲
export function fetchPostsIfNeeded(keyword) {
    return (dispatch, getState) => {
        return dispatch(fetchPosts(keyword))
    }
}

//获取歌词播放链接
export function fetchUrl(id,img,name,time) {
    return (dispatch, getState) => {
        return dispatch(getUrl(id,img,name,time))
    }
}

//获取歌词
export function fetchLrc(id) {
    return (dispatch, getState) => {
        return dispatch(getLrc(id))
    }
}