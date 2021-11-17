import React, { useState, useMemo } from "react";

function calcNumber(count) {
    console.log(22);
  let total = 0;
  console.log(22);
  for (let i = 1; i < count; i++) {
    total += i;
  }
  return total;
}
export default function UseMemo() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);
  const abc = useMemo(() => calcNumber(count), [count]);
  // const abc =calcNumber(count)

  return (
    <div>
      <h2>计算数字的和：{abc}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
