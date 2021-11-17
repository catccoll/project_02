import React, { PureComponent } from "react";

export default class Detail3 extends PureComponent {
  render() {
      console.log(this.props.location.state);
      console.log(this.props.location);
      // 这可以获取到传递的复杂类型的参数
    return (
      <div>
        <h2>Detail3</h2>
      </div>
    );
  }
}
