import React, { Children, Component } from "react";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <ChildCpn name="tom" age={18} />
//       </div>
//     );
//   }
// }

// class ChildCpn extends Component {
//   render() {

//     const { name, age } = this.props;
//     return (
//       <div>
//         {/*要想括号里面有两个变量 就中间用一个加号连接 */}
//         <h2>子组件展示数据:{name + age}</h2>
//       </div>
//     );
//   }
// }

class Children1  extends Component {
  render() {
    const { name, age } = this.props;
    return <div>
      {name}
      {age}

    </div>;
  }
}

export default class App extends Component {
  render() {
    const info = { name: "sai", age: 18 };
    return (
      <div>
        <Children1 {...info} />
      </div>
    );
  }
}
