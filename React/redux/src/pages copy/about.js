import React, { PureComponent } from "react";
import store from '../store'
import {subAction} from '../store/actionCreators'
export default class About extends PureComponent {
  state={
    counter:store.getState().counter
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e=>this.decrement1()}>-1</button>
        <button onClick={e=>this.decrement()}>-5</button>
      </div>
    );
  }
  componentDidMount(){

    //记得这么用就行,一旦派送事件，store里面的数据发生更新，就会调用subscribe这个函数，调用setState这个函数，就会重新渲染页面,这个subscribe函数返回值是一个函数，所以可以用这个返回函数在componentWillUnmount中取消订阅
this.unsubscribe=  store.subscribe(()=>{
        this.setState({
            counter:store.getState().counter
        })
    })
}
componentWillUnmount(){
    // 取消订阅
    this.unsubscribe()
}
decrement1(){
 
    store.dispatch(subAction(1))
}
decrement(num){
  store.dispatch(subAction(num))
}
}
