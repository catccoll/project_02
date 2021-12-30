import React, { PureComponent } from "react";
import { subAction, recommendAxios } from "../store/actionCreators";
import { connect } from "react-redux";
class About extends PureComponent {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={(e) => this.props.decrement1()}>-1</button>
        <button onClick={(e) => this.props.decrement(5)}>-5</button>
      </div>
    );
  }
  // 发送axios请求
  componentDidMount() {
    this.props.sendAxiosRecommend();
  }
}
// 你想在这个组件上依赖(用什么)什么数据，就写在这里，然后通过高阶组价，props拿到就可以用，就跟饶了一个圈子一样
const mapStateToProps = (state) => {
  return {
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommend: state.homeInfo.recommend,
  };
};
// 映射
const mapDispatchToProps = (dispatch) => {
  return {
    decrement1: function () {
      dispatch(subAction(1));
    },
    decrement: function (num) {
      dispatch(subAction(num));
    },
    sendAxiosRecommend() {
      //   异步是函数，同步是对象  所有这里传入的是一个函数，没有括号 理解咯  兄弟
      dispatch({type:'GET_RECOMMEND'});
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
