import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'; 
import './index.css';
import finalCreateStore from './store/configureStore' ; //引入增强后的store
import reducer from './reducers'  // 引入reducers集合
import App from './App';
import Lrc from './Lrc';
import Demo from './Demo';
import Controller from './Controller';

import registerServiceWorker from './registerServiceWorker';

const store = finalCreateStore(reducer);

class Nav extends React.Component{
    render(){
        return(
		<Provider store={store}>
            <div>   
                <App/>
                {this.props.children}
				<Controller />
            </div>   
		</Provider>           
        )
    }
}
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Nav}>
            <IndexRoute component={Demo}/>
            <Route path="/lrc" component={Lrc}/>
        </Route>
    </Router>
    ),document.getElementById('root')
);
registerServiceWorker();
