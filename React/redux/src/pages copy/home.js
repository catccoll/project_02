import React, { PureComponent } from 'react'
import store from '../store/index'
import {addAction} from '../store/actionCreators'
export default class Home extends PureComponent {
    state={
        counter:store.getState().counter
    }
    render() {
        return (
            <div>
              <h1>Home</h1>
              <h2>当前计数：{this.state.counter}</h2>
              <button onClick={e=>this.increment()}>+1</button>
              <button onClick={e=>this.addNumber(5)}>+5</button>
            </div>
        )
    }
    componentDidMount(){
        //记得这么用就行
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
    increment(){
        store.dispatch(addAction(1))
    }
    addNumber(num){
      store.dispatch(addAction(num))
    }
}
