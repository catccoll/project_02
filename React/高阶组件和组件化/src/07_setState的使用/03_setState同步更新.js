import React, { Component } from "react";

export default class App extends Component {
  state = {
    counter: 0,
    message: "弄好呀",
  };
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>当前文本:{message}</h2>
        <button
          onClick={() => {
            this.changeText();
          }}
        >
          改变文本
        </button>
        <button id="btn">改变文本2</button>
      </div>
    );
  }

  changeText() {
    //   情况一:将setState放入到定时器中
  setTimeout(()=>{
    this.setState({
        message: "我很好",
      });
      console.log(this.state.message);
  },0)
  }
  componentDidMount(){
      document.getElementById('btn').addEventListener('click',()=>{
        //   情况二：放到事件里面
        this.setState({
            message: "我很好",
          });
          console.log(this.state.message);
      })
  }
}
