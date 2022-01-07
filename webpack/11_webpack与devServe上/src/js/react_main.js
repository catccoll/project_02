import React, { Component } from "react";
import ReactDOM from "react-dom";
import Son from './son'
class App extends Component {
  state = {
    message: "阿萨德阿萨德",
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <Son></Son>
      </div>
    );
  }
}
ReactDOM.render(<App></App>, document.getElementById("app"));
