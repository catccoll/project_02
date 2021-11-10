import React, { Component } from 'react'


export default class App extends Component {
    constructor(){
        super()
        console.log('执行了constructor函数');
        this.state={
            counter:0,
            isShow:true
        }
    }
    render() {      
        console.log('执行了render函数');
        return (
            <div>      
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={()=>this.add()}> +1</button>
                <button onClick={()=>{this.remove()}}>移除组件</button>
                {this.state.isShow&&<Demo/>}
            </div>
        )
    }
    remove(){
   this.setState({
       isShow:!this.state.isShow
   }) 
    }
    add(){
         this.setState({
             counter:this.state.counter+1
         })
    }
    componentDidMount(){
        console.log('执行了componentDidMount函数');
    }
    componentDidUpdate(){
        console.log('执行了componentDidUpdate函数');
    }
}


 class Demo extends Component {
    render() {
        return (
            <div>
                <h1>我是子组件</h1>
            </div>
        )
    }
    componentWillUnmount(){
        console.log('你被移除了');
    }
}

