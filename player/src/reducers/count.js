// reducers/count.js
import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA,GETTEXT } from '../constants' // 引入action类型常量名

// 初始化state数据
const initialState = {
    data: [{name:"松子糖的回忆",time:"00：05：12",lrc:"青青小巷，石板铺了几许几长",img:"music01.jpg",url:"松子糖的回忆-珊.wav",singer:''},
{name:"燕归巢-萌珊",time:"00：05：12",lrc:"寒梅落尽把东了，衔春的燕想归巢",img:"music01.jpg",url:"燕归巢-萌珊.MP3",singer:''},],
	time:"1:00",
	text:{url:''}
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
        default:
            return state
    }
}