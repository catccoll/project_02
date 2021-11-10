import React, { Component } from "react";
//1. 创建Context对象
const UserContext = React.createContext({
user:'dagao',
level:0
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
          <Profile/>
        </UserContext.Provider>
      </div>
    );
  }
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader/>
      <ul>
        <li>你好</li>
        <li>我很好</li>
      </ul>
    </div>
  );
}
 class ProfileHeader extends Component {
    render() {
        return (
            <div>
                {/*4. 使用信息   每一个组件都有一个context属性 */}
                <h2>用户：{this.context.user}</h2>
                <h2>等级：{this.context.level}</h2>
            </div>
        )
    }
}
// 3.得到传过来的信息
ProfileHeader.contextType=UserContext