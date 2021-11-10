import React, { PureComponent } from "react";

// 1.创建context
const UserContext = React.createContext({
  nickName: "小高",
  level: 99,
});

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        {/* 这里要用两个花括号 如果是一个对象的话，且里面没有变量 */}
        <UserContext.Provider value={{ nickName: "gg", level: 20 ,region:'中国' }}>
          <Home />
          <About />
        </UserContext.Provider>
      </div>
    );
  }
}

class Home extends PureComponent {
  render() {
    return (
        <UserContext.Consumer>
        {(user) => {
          return (
            <h2>about:{`昵称:${user.nickName} 等级：${user.level}`}</h2>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>about:{`昵称:${this.props.nickName} 等级：${this.props.level}`}</h2>
    );
  }
}

export default App;
