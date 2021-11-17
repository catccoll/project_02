import React, { PureComponent } from "react";
import { INCREMENT, DECREMENT, MULTIPLY, DiVIDE,createIncrementAsyncAction } from "./mystore/actionCreate";
import store from "./mystore/index";
export default class App extends PureComponent {
  state = {
    counter: store.getState().counter,
    num: "",
  };
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <select onChange={(e) => this.selectNum(e)}>
          <option value="">请选择数字</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <button onClick={(e) => this.increment()}>+</button>
        <button onClick={(e) => this.decrement()}>-</button>
        <button onClick={(e) => this.multiply()}>increment if odd</button>
        <button onClick={(e) => this.divide()}>increment async</button>
      </div>
    );
  }
  componentDidMount() {
    //   订阅监测redux中状态的变化，只要变化，就调用render
this.unSubscribe=  store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  componentDidUpdate() {
    console.log(store.getState());
  }
//   componentWillUnmount(){
//    this.unSubscribe()
//   }
  selectNum(e) {
    this.setState({
      // 通过隐士转换 乘以1就可以得到一个数字
      num: e.target.value * 1,
    });
  }

  increment() {
    store.dispatch(INCREMENT(this.state.num));
  }
  decrement() {
    store.dispatch(DECREMENT(this.state.num));
  }
  multiply() {
    if (this.state.counter % 2 !== 0) {
      store.dispatch(INCREMENT(this.state.num));
    }
  }
  divide() {
    store.dispatch(createIncrementAsyncAction(this.state.num,1000));
  }
}
