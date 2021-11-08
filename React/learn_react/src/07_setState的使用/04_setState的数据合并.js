import React, { Component } from "react";

export default class App extends Component {
  state = {
    counter: 0,
    message: "弄好呀",
    name:'coderwhy'
  };
  render() {
    const { message,name } = this.state;
    return (
      <div>
        <h2>当前文本:{message}</h2>
        <h2>{name}</h2>
        <button
          onClick={() => {
            this.changeText();
          }}
        >
          改变文本
        </button>
   
      </div>
    );
  }

  changeText() {
    this.setState({
        message: "我很好",
      });
    
Object.assign({},this.state,{message:'我很好'})
  }

}
