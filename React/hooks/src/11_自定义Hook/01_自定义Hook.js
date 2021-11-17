import React,{useEffect,useState} from 'react'

export default function Life() {
   
    useLogging('Life')
    return (
        <div>
            <h2>life</h2>
           <Home/>
           <Profile/> 
        </div>
    )
}


function Home(props) {
    useLogging('Home')
    return (
        <div>
        <h2>Home</h2>
        </div>
    )
}
function Profile(props){
    useLogging('Profile')
    return(
        <div>
            <h2>Profile</h2>
        </div>
    )
}
// Hooks不能在普通函数里面使用
function useLogging(name){


    useEffect(() => {
        console.log(`${name}组件被创建出来`);
          return () => {
            console.log(`${name}组件被销毁掉了`);
          }
      },[])
}
// 自定义Hook就是把相同的逻辑抽到一个自定义hook当中 但是函数名称要用use开头，这样才能在函数式组件使用并调用
