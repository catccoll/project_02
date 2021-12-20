import React, { memo, useCallback, useState } from "react";

const HYButton = memo((props) => {
   
    console.log(props.title);
  return <button onClick={props.increment}>HYbutton 按钮 </button>;
})

export default function UseCallback() {
    const [isShow, setIsShow] = useState(true)
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const increment2 = useCallback(() => { 
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div><h2>{isShow}</h2>
      <h2>{counter}</h2>
      <HYButton title="btn1" increment={increment} />
      <HYButton title='btn2' increment={increment2} />
      <button onClick={e=>setIsShow(!isShow)}>isShow</button>
    </div>
  );
}
/**在这个环境下 useCallback对counter依赖，所以counter不变，useCallback用的那个函数也就不变，地址不变，所以你传过去的props不变，props不变就不会发生更新，也就不会重新渲染，然后你又对函数进行了优化，浅层比较了下传递过来的props是否发生改变，不改变就不渲染这个组件，改变了就渲染这个组件，但是没有用useCallback的那个函数，虽然值不变，但是这个组件里面的某个值发生了改变，就会重新渲染这个里面的每个函数和组件，所以你获得counter值，然后这个函数的他的内存地址会发生了改变，也就是重新创建了一个开辟了新的内存地址来存储代码，所以相当于props传递过来的内存地址发生了改变，就会渲染子组件
 * 
 * useCallback在什么时候使用？
 * 场景：在将一个组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行处理，他返回的是一个函数的memoized值也就是记忆值，
 */
