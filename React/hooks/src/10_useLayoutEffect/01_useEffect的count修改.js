import React,{useEffect,useState} from 'react'

export default function App() {
      const [count, setCount] = useState(10)
 useEffect(()=>{
     if(count===0){
         setCount(Math.random()+3000000000)
     }
 },[count])
    const div='<p>你好呀</p>'
    return (
        <div>
            <h2>{count}</h2>
            {div}
            <button onClick={e=>setCount(0)}>修改数字</button>
        </div>
    )
}

// useEffect会在渲染的内容更新到DOM上后执行，不会阻塞DOM的更新；
// useLayoutEffect会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新；
