import React, { useState,useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
//   当组件渲染到真实DOM上会执行这个回调函数 不管第一次还是更新之后都会执行这个函数
  useEffect(()=>{
    document.title=counter
    console.log(22);
    return ()=>{
      console.log(11);
    }
  },[counter])
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
