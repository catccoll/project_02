import React ,{useState}from "react";
/**
 * Hook:useState
 * >本身是一个函数 来自react包
 * >参数和返回值
 * 1.参数:作用是给创建出来的状态赋一个默认值
 * 2.返回值：数组
 * 元素1：当前state的值
 * 元素2：设置新的值时，使用的一个函数
 */


// export default function CounterHook() {
//   console.log(useState());
//    const arr=useState(0)
//     const state=arr[0]
//     const setState=arr[1]
//     console.log(state);
//   return (
    
//     <div>
//       <h2>当前计数：{state}</h2>
//       <button onClick={e=>setState(state+1)}>+1</button>
//       <button  onClick={e=>setState(state-1)}>-1</button>
//     </div>
//   );
// }
export default function CounterHook(){
   console.log(useState());
   const arr =useState(0)
   console.log(arr);//useState(0)返回的是一个数组      第一个参数是初始值  第二个参数是设置值的函数
   const state=arr[0]
   const setState=arr[1]
   console.log(state);
   const add=()=>{
        setState(state+1)
  }
  function sub(){
   setState(state-1)
  }
     return(
       <div>
        <h2> 当前计数：{state}</h2>
        <button onClick={()=>{add()}}>+1</button>
        <button onClick={()=>{sub()}}>-1</button>
       </div>
     )
    
}
