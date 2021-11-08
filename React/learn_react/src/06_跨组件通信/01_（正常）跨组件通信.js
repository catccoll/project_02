import React, { Component } from "react";

export default class App extends Component {
  state = {
    user: "xiaGao",
    level: 100,
  };
  render() {
    return (
      <div>
        <Profile {...this.state} />
      </div>
    );
  }
}
function Profile(props) {
  return (
    <div>
      <ProfileHeader {...props} />
      <ul>
        <li>你好</li>
        <li>我很好</li>
      </ul>
    </div>
  );
}
function ProfileHeader(props) {
  return (
    <div>
      <h2>用户：{props.user}</h2>
      <h2>等级：{props.level}</h2>
    </div>
  );
}
