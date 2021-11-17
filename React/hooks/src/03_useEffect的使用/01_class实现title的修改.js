import React, { PureComponent } from 'react'
export default class App extends PureComponent {
    state={
        counter:0
    }
    render() {
        return (
            <div>
                <h2>当前计数:{this.state.counter}</h2>
                <button onClick={e=>this.setState({counter:this.state.counter+1})}>+1</button>
            </div>
        )
    }
    componentDidMount(){
       document.title=0
    }
    componentDidUpdate(){
        document.title=this.state.counter
    }
}
