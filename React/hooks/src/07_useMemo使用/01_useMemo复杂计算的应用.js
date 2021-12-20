import React, { useState, useMemo ,useCallback} from "react";

export default function UseMemo() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);
  const abc =useMemo(()=>calcNumber(count),[count])
  // const abc =calcNumber(count)
  function calcNumber(count) {
    console.log(22);
    let total = 0;

    for (let i = 1; i < count; i++) {
      total += i;
    }
    return total;
  }
  return (
    <div>
      <h2>计算数字的和：{abc}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
// 都会进行首次渲染，useMemo也是返回的一个记忆值

// 当一个函数进行大量的计算操作，是否有必须要每次渲染时都重新计算，所以可以使用useMemo进行包裹，他返回的是一个记忆值，当一个函数被传入子组件当做属性的时候，如果有返回值的情况下，就进行使用useMemo，如果没有返回的值得到情况下，就使用sueCallback
