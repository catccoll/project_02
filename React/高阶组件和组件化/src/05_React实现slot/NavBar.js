import React, { Component , Children } from "react";

export default class NavBar extends Component {
  render() {
    console.log(Children);
    console.log(this.props.children);
    return (
      <div className="NavBar">
        <div className="nav-left">{this.props.children[0]}</div>
        <div className="nav-center">{this.props.children[1]}</div>
        <div className="nav-right">{this.props.children[2]}</div>
      </div>
    );
  }
}
