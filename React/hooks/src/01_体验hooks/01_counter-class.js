import React, { PureComponent } from 'react'

export default class CounterClass extends PureComponent {
    state={
        counter:0
    }
    render() {
        return (
            <div>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={()=>this.add()}>+1</button>
                <button onClick={()=>this.sub()}>-1</button>
            </div>
        )
    }
    add(){
        this.setState({counter:this.state.counter+1})
    }
    sub(){
        this.setState({counter:this.state.counter-1})
    }
}
