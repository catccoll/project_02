import React, { Component } from "react";

export default class App extends Component {
  state = {
    info: [
      { name: "lilei", age: 20 },
      { name: "lucy", age: 18 },
      { name: "tom", age: 30 },
    ],
  };
  render() {
    console.log(11);
    const { info } = this.state;
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {info.map((item, index) => {
            return (
              <li key={item.name}>
                姓名:{item.name}
                年龄:{item.age}{" "}
                <button
                  onClick={() => {
                    this.changeAge(index);
                  }}
                >
                  年龄+1
                </button>{" "}
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            this.insertData();
          }}
        >
          添加数据
        </button>
      </div>
    );
  }
  insertData() {
    //1. 这样会影shouldComponentUpdate的判断，在开发中不推荐这么做法
    // this.state.info.push({name:'saiGao',age:22})
    // this.setState({
    //     info:this.state.info
    // })

    //2. 推荐的做法
    const newInfo = [...this.state.info];
    const p = { name: "saiGao", age: 22 };
    this.setState({
      info: [p, ...newInfo],
    });
  }
  changeAge(index) {
    const newInfo = [...this.state.info];
    newInfo[index].age += 1;
    this.setState({
      info: newInfo,
    });
  }
  // 这叫scu优化
  shouldComponentUpdate(newProps, newState) {
    //newState代表的this.setState
    if (this.state.info !== newState.info) {
      return true;
    }
    return false;
  }
}
