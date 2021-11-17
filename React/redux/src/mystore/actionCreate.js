 import {INCREMENT1,DECREMENT1,MULTIPLY1,ASYNC} from './constant'

 export const INCREMENT = (num) => ({ type: INCREMENT1, data: num });
export const DECREMENT = (num) => ({ type: DECREMENT1, data: num });
export const MULTIPLY = (num) => ({ type: MULTIPLY1, data: num });
export const DiVIDE = (num) => ({ type:ASYNC, data: num });
// 所谓的异步action，就是指action的值为函数,异步action中一般都会调用同步action，但是异步action不是必须的，他只是为了在组件里面的页面简洁，在组件里面也可以实现异步
export const createIncrementAsyncAction=(num,time)=>{
    return (dispatch)=>{
     setTimeout(()=>{
        dispatch(INCREMENT(num))
     },time)
    }
}
// 一般对象为同步action  function为异步action
