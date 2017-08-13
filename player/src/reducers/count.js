// reducers/count.js
import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA, GETTEXT, GETLRC,GETTIME } from '../constants' // 引入action类型常量名

// 初始化state数据
const initialState = {
    data: [{
			id
			:
			209326,
			img
			:
			"http://p1.music.126.net/BZNpKSKkPTTv5ZnxdYAdUQ==/5850501371402948.jpg",
			lrc
			:
			"",
			name
			:
			"旅行的意义",
			singer
			:
			"陈绮贞",
			time
			:
			"4:4"},
			{
			id
			:
			471403427,
			img
			:
			"http://p1.music.126.net/AyyxC4stCu-Pm5qa8gaqDQ==/18762066418246617.jpg",
			lrc
			:
			"",
			name
			:
			"我喜欢上你时的内心活动",
			singer
			:
			"陈绮贞",
			time
			:
			"3:45"},
			{
			id
			:
			209115,
			img
			:
			"http://p1.music.126.net/Vr0bmJIA2lozy-ykB8BXeg==/95657511628651.jpg",
			lrc
			:
			"",
			name
			:
			"鱼",
			singer
			:
			"陈绮贞",
			time
			:
			"5:2"},
			{
			id
			:
			480426411,
			img
			:
			"http://p1.music.126.net/PiZetniTZYh8bi9CmQws8g==/19124905253688053.jpg",
			lrc
			:
			"",
			name
			:
			"我喜欢上你时的内心活动（demo）",
			singer
			:
			"陈绮贞",
			time
			:
			"3:25"
			}
			],
	text:{url:'',id:'',img:'music01.jpg',title:'',time:''},
	lrc:['当前没有播放的歌曲*-*'],
	currenttime:0
}

// 通过dispatch action进入
export default function update(state = initialState, action) {

    // 根据不同的action type进行state的更新
    switch(action.type) {
        case INCREASE:
            return Object.assign({}, state, { number: state.number + action.amount })
        case DECREASE:
            return Object.assign({}, state, { number: state.number - action.amount })
        case GETSUCCESS:
            return Object.assign({}, state, { data: action.data })
        case REFRESHDATA:
            return Object.assign({}, state, { data: [] })
		case GETTEXT:
			return Object.assign({}, state, { text:action.text })
		case GETLRC:
		return Object.assign({}, state, { lrc:action.text })
		case GETTIME:
		return Object.assign({}, state, { currenttime:action.currenttime })
        default:
            return state
    }
}