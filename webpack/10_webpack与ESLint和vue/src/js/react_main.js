import React, { Component } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  state = {
    message: "你好呀",
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
ReactDOM.render(<App></App>, document.getElementById("app"));
