import React, { Component } from "react";
//1. 创建Context对象
const UserContext = React.createContext({
  user: "dagao",
  level: 0,
  // 当子组件没有包裹在UserContext.provider中，就使用这个默认值
});
export default class App extends Component {
  state = {
    user: "xiaGao",
    level: 100,
  };
  render() {
    return (
      <div>
        {/* 2.包裹子组件 UserContext.Provider   */}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}

function Profile() {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>你好</li>
        <li>我很好</li>
      </ul>
    </div>
  );
}
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户:{value.user}</h2>
            <h2>等级:{value.level}</h2>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
