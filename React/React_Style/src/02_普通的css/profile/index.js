import React, { PureComponent } from 'react'
import './style.css'
export default class Profile extends PureComponent {
    render() {
        return (
            <div className='profile'>
                   <h2 className='title'>我是Profile标题</h2>
                <div className='list'>
                    <li>"列表"1</li>
                    <li>"列表"2</li>
                    <li>"列表"3</li>
                </div>
            
            </div>
        )
    }
}
