import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import { Provider } from 'react-redux'; // 引入Provider将store的数据共享给子组件
import 'bootstrap/dist/css/bootstrap.css'; 
import './index.css';
import finalCreateStore from './store/configureStore' ; // 引入增强后的store
import reducer from './reducers'  // 引入reducers集合
// 引入子组件
import App from './App'; // 引入导航栏
import Demo from './Demo'; // 引入账单记录容器
import Controller from './Controller'; // 引入记账组件
import Login from './Login'; // 引入登陆组件

import registerServiceWorker from './registerServiceWorker';

const store = finalCreateStore(reducer);

class Nav extends React.Component{
    render(){
        return(
		<Provider store={store}>
            <div>   
                <App/>
				{this.props.children}
            </div>   
		</Provider>           
        )
    }
}
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Nav}>
            <IndexRoute component={Demo}/> 
            <Route path="/Controller" component={Controller}/> 
			<Route path="/Login" component={Login}/> 
        </Route>
    </Router>
    ),document.getElementById('root')
);
registerServiceWorker();