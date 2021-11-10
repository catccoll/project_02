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
        // 1.setState本身合并
        // this.setState({
        //     counter:this.state.counter+1
        // })
        // this.setState({
        //     counter:this.state.counter+1
        // })
        // this.setState({
        //     counter:this.state.counter+1
        // })
        // 2.setState合并时进行累加
        this.setState((pervState,props)=>{
            return{
                counter:pervState.counter+1
            }
        })
        this.setState((pervState,props)=>{
            return{
                counter:pervState.counter+1
            }
        })
        this.setState((pervState,props)=>{
            return{
                counter:pervState.counter+1
            }
        })
    }
}
