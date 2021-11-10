import React, { PureComponent } from 'react'
import styled from 'styled-components'
const HYinput=styled.input.attrs({
    placeholder:'你好',
    bColor:'red'
    // 写在这里的属性一般是写死的属性
})`

border-color: ${props=>props.bColor};//DOM树里面的属性会与上面的结合在一起，一起传到props
color: ${props=>props.color};
`
/*
特点：
1.props的穿透
2.attrs的使用
3.传入state作为props属性

*/ 
export default class Profile extends PureComponent {
    state={
        color:'skyblue'

    }
    render() {
        return (
            <div className='profile'>
                <input type="text" />
                <HYinput type="text"  color={this.state.color}/>
                   <h2 >我是Profile标题</h2>
                <div className='list'>
                    <li>"列表"1</li>
                    <li>"列表"2</li>
                    <li>"列表"3</li>
                </div>
            
            </div>
        )
    }
}
