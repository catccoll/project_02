import React from "react";
import { connect } from "../utils/connect";
import { addAction } from "../store/actionCreators";
function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={(e) => props.increment()}>+1</button>
      <button onClick={(e) => props.addNumber(5)}>+5</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  counter: state.counter,
});
const mapDispatchToProps = (dispatch) => ({
  increment: function () {
    dispatch(addAction(1));
  },
  addNumber: function (num) {
    dispatch(addAction(num));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
