import React from "react";
import { connect } from "../utils/connect";
import { subAction } from "../store/actionCreators";
function About(props) {
  return (
    <div>
      <h1>About</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={(e) => props.decrement1()}>-1</button>
      <button onClick={(e) => props.decrement(5)}>-5</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrement1: function () {
      dispatch(subAction(1));
    },
    decrement: function (num) {
      dispatch(subAction(num));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
