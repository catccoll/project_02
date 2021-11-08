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
                </Modal>
            </div>
        )
    }
}
