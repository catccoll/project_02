import React, { useState, useReducer } from "react";

export default function Home() {
  // const [counter, setCounter] = useState(0)
  // useReducer第一个参数就和redux的reducer形式一样，第二个参数就是初始值，第三个参数不怎么去使用，所有忽略不计
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  // useReducer 这个hook仅仅只是useState的代替品，处理一些复杂的state的状态的改变
  return (
    <div>
      {/* <h2>Home当前计数:{counter}</h2>
            <button onClick={e=>{setCounter(counter+1)}}>+1</button>
            <button onClick={e=>{setCounter(counter-1)}}>-1</button> */}
      <h2>Home当前计数:{state.counter}</h2>
      <button
        onClick={(e) => {
          dispatch({ type: "increment" });
        }}
      >
        +1
      </button>
      <button
        onClick={(e) => {
          dispatch({ type: "decrement" });
        }}
      >
        -1
      </button>
    </div>
  );
}
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
