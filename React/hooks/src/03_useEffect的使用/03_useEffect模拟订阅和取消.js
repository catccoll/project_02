import React, { useEffect,useState } from 'react'

export default function App() {
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
        // 在这个函数里 进行一些消息的订阅
        console.log('订阅消息');
    //    这里所做的操作就相当于componendDidMount 里面所操作的内容
        return ()=>{   // useEffect的有两个参数一个是回调函数，但是这个回调函数也有一个返回值，返回值也是一个回调函数，这个回调函数也可以称之为清楚函数，但是这两个回调函数在渲染完之后和更新都会回调，所以有第二个参数，他是一个数组，如果你想只让他们调用一次，就传入一个空数组，如果你想依赖某个state来变化，就传入相应的state
            // 这里所做的操作就相当于   componentWillUnmount 里面所操作的内容 b比如事件总线，或在redux中手动调用的subscribe
            // 这个函数相当于组件卸载的时候会执行的一个函数,但是更新组件的时候也会渲染，这样做很不好
            console.log('取消订阅');
        }
    },[counter])
// 如果第二个参数是空数组，意味着他只有在第一次渲染的时候会执行这个函数，且后面的return函数会在卸载的时候执行，当数组里面有值(意思依赖某个值)的时候，依赖的值发生了改变，这个useEffect就会对应的会调用这个函数  
    return (
        <div>
          
            <h2>{counter}</h2>
            <button onClick={()=>{setCounter(counter+1)}}>+1</button>
        </div>
    )
}
