import React from "react";
import { connect } from "react-redux";
import { addAction } from "../store/actionCreators";
function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <h2>当前计数：{props.counter}</h2>
      <ul>
        {props.recommends.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
      <button onClick={(e) => props.increment()}>+1</button>
      <button onClick={(e) => props.addNumber(5)}>+5</button>
      <ul>
        {props.banners.map((item) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  counter: state.counterInfo.counter,
  banners: state.homeInfo.banners,
  recommends: state.homeInfo.recommend,
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
