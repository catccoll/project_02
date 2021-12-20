import React, { PureComponent } from 'react'
import  ReactDOM from 'react-dom'

export default class App extends PureComponent {
    render() {
        return (
            <div>
            <Home/>
            </div>
        )
    }
}
class Modal extends PureComponent {
    render() {
        console.log(this.props.children);
        return  ReactDOM.createPortal(
              this.props.children,
            document.getElementById('model')
        )
    }
}


class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2>home</h2>

                <Modal>
                    {/* 所有的子组件都是放到this.props.children */}
                    <h2>title</h2>
                    <h1>portals</h1>
                </Modal>
            </div>
        )
    }
}
// 使用方法就是定义一下portal (传送门的意思) 在其他地方使用的话就加上这个组件包裹下就行
