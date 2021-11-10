import React, { Component } from "react";
import PropTypes from 'prop-types'
export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="tom" age={18} />
      </div>
    );
  }
}

class ChildCpn extends Component {
  render() {
        console.log(this);
    const { name, age } = this.props;
    return (
      <div>
        {/*要想括号里面有两个变量 就中间用一个加号连接 */}
        <h2>子组件展示数据:{name + age}</h2>
      </div>
    );
  }
  // 这个第一个是小写，第二个是大写 ，且需要导入这个库才能使用
  static propTypes={
    name: PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
  }
  static defaultProps={
       name:'赛高'
  }
}
