import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    state={
        color:'red'
    }
    render() {
         const pStyle={
             color:this.state.color,
           textDecoration:'underline'
         }
        return (
            <div>
                {/* <h2  style={{fontSize:'50PX'}}>我是标题</h2> */}
                <h2  style={pStyle}>我是标题</h2>
                <p>我是一段文字描述</p>
            </div>
        )
    }
}

