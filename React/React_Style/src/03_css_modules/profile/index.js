import React, { PureComponent } from 'react'
import profileStyle from './style.module.css'
export default class Profile extends PureComponent {
    state={
        color:'skyblue'
    }
    render() {
        return (
            <div className='profile'>
                   <h2 className={profileStyle.title} style={{color:this.state.color}}>我是Profile标题</h2>
                <div className='list'>
                    <li>"列表"1</li>
                    <li>"列表"2</li>
                    <li>"列表"3</li>
                </div>
            
            </div>
        )
    }
}
