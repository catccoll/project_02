import React, { PureComponent } from 'react'
import styled,{ThemeProvider} from 'styled-components'
import Home from  '../home'
import Profile from '../profile'
const HYButton =styled.button`
padding: 10px 20px;
color: red;
border-color: red;
`
// const HYPrimaryButton=styled.button`
// padding: 10px 20px;
// color: purple;
// background-color: skyblue;
// border-color: red;
// `

// 这里继承组件的属性
const HYPrimaryButton=styled(HYButton)`
color: purple;
background-color: skyblue;
`


export default class App extends PureComponent {
    render() {
        return (
            // 共享主题,下面的子组件都可以通过props拿到属性值
            <ThemeProvider theme={{themeColor:'purple', fontSize:"30px" }}>
                <h2 >我是App标题</h2>
                <HYButton>我是普通的按钮</HYButton>
                <HYPrimaryButton>我是主要的按钮</HYPrimaryButton>
             <Home/>
             <Profile/>
            </ThemeProvider>
        )
    }
}
