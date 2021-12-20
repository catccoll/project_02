import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  const [friends, setFriends] = useState(["kobe", "lilei"]);
  // 多个状态  就多个useState，有几个变量就弄几个useState
  return (
    <div>
      <h2>当前计数:{count}</h2>
      <h2>我的年龄:{age}</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
