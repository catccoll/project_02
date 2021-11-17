import React, { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    console.log("修改DOM", counter);
  }, [counter]);
  // 第二个参数的意思是 只有数组里面的变量发生了改变  才会执行useEffect里面的这个函数，不依赖于其他的他，其他的更新了变量，他也不会执行这个函数,这个第二个参数的作用是提高性能，不要让他随随便便的调用这个函数
  useEffect(() => {
    console.log("订阅消息");
  }, []);
  useEffect(() => {
    console.log("网络请求");
  }, []);
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <h3>{isLogin ? "xusaigao" : 11}</h3>
      <button onClick={(e) => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  );
}
