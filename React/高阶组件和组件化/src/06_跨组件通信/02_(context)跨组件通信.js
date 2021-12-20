import React, { Component, createContext } from "react";
const UserContext = createContext({
  name: "sai",
  age: 18,
});
export default class App extends Component {
  state = {
    sex: "男",
    age: 18,
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        <Child></Child>
      </UserContext.Provider>
    );
  }
}
function Child() {
  return (
    <ul>
      <li>你好</li>
      <App1></App1>
    </ul>
  );
}

class App1 extends Component {
  render() {
    return (
      <div>
        <h1>{this.context.sex}</h1>
        <h1>{this.context.age}</h1>
      </div>
    );
  }
}
App1.contextType = UserContext;
