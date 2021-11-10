import React, { PureComponent,createRef } from 'react'

export default class App extends PureComponent {
   myRef=createRef()
    render() {
        return (
            <div>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    {/* 这就是受控组件 */}
                    <label htmlFor="userName">用户：<input ref={this.myRef} type="text"  id='userName'/ ></label>
                    <input type="submit"  value='提交'/>
                </form>
            </div>
        )
    }
    handleSubmit(e){
        // 不建议直接操作Dom元素
        // 高阶组件 higher-order-component HOC
        e.preventDefault()
       console.log(this.myRef.current.value);
    }
  
}
