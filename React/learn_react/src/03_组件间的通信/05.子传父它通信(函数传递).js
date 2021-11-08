import React, { Component } from 'react'

export default class App extends Component {
    state={
        counter:0
    }
    render() {
        const { counter}=this.state
        return (
            <div>
                <h2>当前计数:{counter}</h2>
                <button onClick={()=>{this.add()}}>+1</button>
             <CounterButton btnClick={this.add.bind(this)}/>
            </div>
        )
    }
    add(){
        this.setState({
            counter:this.state.counter+1
        })
    }
}
class CounterButton extends Component{
    render(){
        const {btnClick}=this.props
        return(
            <button onClick={btnClick}>++1</button>
        )
    }
}
