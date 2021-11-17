import React, { useState, useMemo,memo } from "react";

const HYInfo = memo((props) => {
    console.log(2);
  return (
    <h2>
      名字:{props.name} 年龄:{props.age}
    </h2>
  );
});
export default function UseMemo() {
  console.log("重新渲染");
  const [show, setShow] = useState(true);
//   const [state, setstate] = useState({ name: "why", age: 18 })
  const info = useMemo(() => {
    return { name: "why", age: 18 };
  }, []);
//   反正你这种类型定义在组件里面的东西 ，渲染的时候他的地址都会改变，所以尽量不要写在组件里，

  return (
    <div>
      <HYInfo {...info}></HYInfo>
      <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  );
}
/**
 * 一般情况下  不管三七二十一，函数式组件都用memo包裹
 * 在将一个组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行处理 他是针对函数做优化
 * 而useMemo是针对返回值做优化，返回值可以是任何形式，所以这useCallback可以转为话useMemo
 */
