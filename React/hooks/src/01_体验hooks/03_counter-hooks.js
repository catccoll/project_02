import React, { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   // useState只能在函数最外层调用Hook,不要再循环、条件判断或者子函数调用
//   // 只能在React的函数组件中调用Hook，不要再javaScript其他函数调用
//   //  这括号里面的可以自己随意命名
//   console.log(11);
//   function handleBtnClick() {
//     //   setCount(count+10)
//     //   setCount(count+10)  这样使用三次就只会加10
//     //   setCount(count+10)
//     setCount((preValue) => preValue + 10);
//     setCount((preValue) => preValue + 10);  //这样操作为+30
//     setCount((preValue) => preValue + 10);
//     //   setCount也可以传入一个函数
    
//   }
//   return (
//     <div>
//       <h3>当前计数:{count}</h3>
//       <button onClick={e => setCount(count + 1)}>+1</button>
//       {/* setCount(这里面也可以传入函数) */}
//       <button onClick={e => setCount((preValue) => preValue + 9)}>+9</button>
//       <button onClick={e=> setCount(count - 1)}>-1</button>
//       <button onClick={handleBtnClick}>+10</button>
//     </div> 
//   );
// }
export default function App(){
      const [state, setState] = useState(0)

function changeMore(){
  setState(state+1)
  setState(state+1)
  setState(state+1)
}
function changeMore1(){
  setState((preState)=>
    { return preState+1}
  )
  setState((preState)=>
  { return preState+1}
)
setState((preState)=>
{  return preState+1}
)
}
      return(
        <div>
          <h1>当前计数：{state}</h1>
          <button onClick={e=>setState(state+1)}>+1</button>
          <button onClick={e=>setState(state-1)}>-1</button>
          <button onClick={e=>changeMore()}>进行多次相同的操作，但是只改变一次</button>
          <button onClick={e=>changeMore1()}>进行多次相同的操作，但是可以叠加改变</button>

        </div>
      )
}
