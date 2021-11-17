import React, { useEffect, useState ,useLayoutEffect} from "react";

export default function App() {
  const [count, setCount] = useState(10);
  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random()+200000000);
    }
  }, [count]);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={(e) => setCount(0)}>修改数字</button>
    </div>
  );
}
// 这个东西用的非常少，他和useEffect的区别就是  ，当状态发生变化的时候，useLayoutEffect 会截胡，他不会让页面立马更新，而是直接执行useLayoutEffect里面的函数，这样页面就不会先为0然后为随机数，但是当useEffect的时候，当页面状态发生更新，他会自己先渲染页面，然后在调用useEffect里面的函数，所以页面在非常非常短的短暂时间是先为0，然后为随机数，但这不没有影响，还是useEffect用的多