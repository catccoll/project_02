import React, { useRef,useState,useEffect} from 'react'

export default function App() {
    const [count, setCount] = useState(0)
  const counterRef=  useRef(count)
   
  useEffect(()=>{
         counterRef.current=count
        //  counterRef.current可以保存上一次的值，但是你利用let和var 这个函数重新调用，这个值就会变，然后不能保存上一次的值
  },[count])
//   这函数式组件里面  先会执行执行return里面的东西，也就是渲染完界面之后，再来调用useEffect这个函数
    return (
        <div>
            {/* <h2>{counterRef.current}</h2>
            <h2>count中的值：{count}</h2> */}
            <h2>count上一次的值:{counterRef.current}</h2>
            <h2>count这一次的值:{count}</h2>
            <button onClick={e=>setCount(count+10)}>+10</button>
        </div>
    )
}
