// reducers/count.js
import { GETSUCCESS,GETBILL,GETMES } from '../constants' // 引入action类型常量名

// 初始化state数据
const initialState = {
	username:'',
    login:'',
	data:[],
	mes:''
}

// 通过dispatch action进入
export default function update(state = initialState, action) {

    // 根据不同的action type进行state的更新
    switch(action.type) {
        case GETSUCCESS:
            return Object.assign({}, state, { login: action.data.login , username: action.data.username })
		case GETBILL:
            return Object.assign({}, state, { data: action.data })
		case GETMES:
            return Object.assign({}, state, { mes: action.data })
        default:
            return state
    }
}