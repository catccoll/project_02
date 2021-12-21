import React, { PureComponent } from "react";

export default class Son extends PureComponent {
  state = {
    x: "",
    y: "",
  };
  render() {
    const { x, y } = this.state;
    return (
      <div
        onMouseMove={(e) => {
          this.handleMove(e);
        }}
      >
        {this.props.render(x, y)}
      </div>
    );
  }
  handleMove(e) {
      console.log(e);
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  }
}
