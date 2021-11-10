import React, { PureComponent } from 'react'
import Home from  '../home'
import Profile from '../profile'
import appStyle from './index.module.css'
export default class App extends PureComponent {
    render() {
        return (
            <div id='app'>
                <h2 className={appStyle.title}>我是App标题</h2>
             <Home/>
             <Profile/>
            </div>
        )
    }
}
