import React, { Component } from "react";
export default class App extends Component {
  state = {
    counter: 0,
    message: "你好呀",
  };
  render() {
    console.log("App render");
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
        <button
          onClick={() => {
            this.changeText();
          }}
        >
          改变文本
        </button>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
  add() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    //  nextState最新的state, nextProps最新的props
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }
  changeText() {
    this.setState({
      message: "我很好",
    });
  }
}
