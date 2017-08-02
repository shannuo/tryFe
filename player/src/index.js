import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css'; 
import './index.css';
import App from './App';
import Lrc from './Lrc';
import Demo from './Demo';
import Controller from './Controller';

import registerServiceWorker from './registerServiceWorker';

class Nav extends React.Component{
    render(){
        return(
            <div>   
                <App/>
                {this.props.children}
				<Controller />
            </div>              
        )
    }
}
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Nav}>
            <IndexRoute component={Demo}/>
            <Route path="/lrc" component={Lrc}/>
        </Route>
    </Router>
    ),document.getElementById('root')
);
registerServiceWorker();
