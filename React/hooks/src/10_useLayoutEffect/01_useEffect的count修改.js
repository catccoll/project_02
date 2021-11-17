import React,{useEffect,useState} from 'react'

export default function App() {
      const [count, setCount] = useState(10)
 useEffect(()=>{
     if(count===0){
         setCount(Math.random()+3000000000)
     }
 },[count])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={e=>setCount(0)}>修改数字</button>
        </div>
    )
}
