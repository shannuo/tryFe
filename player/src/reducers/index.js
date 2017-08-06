// reducers/index.js
import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import update from './count' // 引入update这个reducer

export default combineReducers({
    update,
})