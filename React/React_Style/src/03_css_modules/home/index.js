import React, { PureComponent } from 'react'
import homeStyle from './style.module.css'
export default class Home extends PureComponent {
    render() {
        return (
            <div className='Home'>
                <h2 className={homeStyle.title}>我是Home标题</h2>
                <div className={homeStyle.banner}>    <span>轮播图</span></div>
            
            </div>
        )
    }
}
