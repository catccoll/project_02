import React, { Component } from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          {/* 这里面的内容会被传递到子组件里面的this.props.children */}
          <span>aaa</span>
          <span>bbb</span>
          <span>ccc</span>
        </NavBar>
        <NavBar2
          leftSlot={<span>aaa</span>}
          centerSlot={<span>bbb</span>}
          rightSlot={<span>ccc</span>}
        />
      </div>
    );
  }
}
