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
        <h2>当前计数:{message}</h2>
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
  //   方式二:获取异步更新后的数据
  componentDidUpdate() {
    console.log(this.state.message);
  }
  changeText() {
    // setState是异步更新
    /*为什么是异步更新
setState设计为异步，可以显著的提升性能;
如果每次调用setState都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率是很低的;最好的办法应该是获取到多个更新，之后进行批量更新;
如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步;state和props不能保持一致性，会在开发中产生很多的问题;
        */
    // this.setState({
    //   message: "我很好",
    // });
    // console.log(this.state.message); //第一次是弄好呀,第二次是我很好  他是异步更新

    // 方式一:获取异步更新后的数据 setState(更新的state,callback)
    this.setState(
      {
        message: "我很好",
      },
      () => {
        console.log(this.state.message);
      }
    );
  }
  /*其实分成两种情况︰
  在组件生命周期或React合成事件中，setState是异步;
   在setTimeout或者原生dom事件中，setState是同步;
*/
}
