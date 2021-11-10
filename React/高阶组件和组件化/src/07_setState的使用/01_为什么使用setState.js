import React, { Component } from 'react'

export default class App extends Component {
    state={
        counter:0
    }
    render() {
        const {counter}=this.state
        return (
            <div>
               <h2>当前计数:{counter}</h2>
               <button onClick={()=>{this.add()}}>+1</button>
            </div>
        )
    }
    add(){
        this.setState({
            counter:this.state.counter+1
        })
    }
}
