import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import App from './views/App'
import Home from './views/home'
import Mine from './views/mine'
import TodoList from './views/todoList'
// import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

const isLogined=true;

ReactDOM.render(
    <Provider store={store}>
        <HashRouter exact>
            <ConfigProvider locale={zhCN}>
                {isLogined?<App></App>:''}
                <Redirect exact from="/" to="/home" component={Home} />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path='/mine' component={Mine} />
                    <Route path='/todoList' component={TodoList} />
                </Switch>
            </ConfigProvider>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister();