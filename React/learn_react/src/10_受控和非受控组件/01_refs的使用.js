import React, { Component } from 'react'

export default class App extends Component {
    myRef=React.createRef()
    counterRef=React.createRef()
    render() {
        return (
            <div>
            {/* 第一种ref的方式  字符串方式*/}
            <h2 ref='title'>你好呀</h2>

            {/* 第二种ref的方式React推荐的方式 对象的方式 */}
            <h3 ref={this.myRef}>我知道你还是她</h3>

            {/* 第三种方式 函数的方式 */}
            <h4 ref={c=>this.h4=c}>哈哈</h4>

            <button onClick={()=>{this.changeText()}}>改变文本</button>
            <hr />
            <Counter ref={this.counterRef}/>
            <button onClick={()=>{
                this.appButton()
            }}>App按钮</button>
            </div>
        )
    }
    changeText(){
        this.refs.title.innerHTML='我很好'
        this.myRef.current.innerHTML='是的'
        console.log(this.myRef);
        this.h4.innerHTML='嘻嘻哈哈'
    }
    appButton(){
        // 通过ref可以获得到其他组件的方法，函数式ref拿不到其他组件的方法
        this.counterRef.current.add()
    }
}
 class Counter extends Component {
    state = {
      counter: 0,
    };
    render() {
  
      return (
        <div>
          <h2>当前计数:{this.state.counter}</h2>
          <button
            onClick={() => {
              this.add();
            }}
          >
            +1
          </button>
      
      
      
        </div>
      );
    }
    add() {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  }
  
