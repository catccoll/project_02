import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    state={
        username:'',
        password:''
    }
    render() {
        return (
            <div>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    {/* 这就是受控组件 */}
                    <label htmlFor="userName">用户：<input value={this.state.username} onChange={(e)=>{this.changeInput(e)}} type="text"  id='userName' name='username'/ ></label>
                    <label htmlFor="password">密码：<input value={this.state.password} onChange={(e)=>{this.changeInput(e)}} type="text"  id='password'name="password" / ></label>
                    <input type="submit"  value='提交'/>
                </form>
            </div>
        )
    }
    handleSubmit(e){
        e.preventDefault()
        console.log(this.state.username,this.state.password);
    }
    changeInput(e){
        this.setState({
            // 计算属性名
              [e.target.name]:e.target.value//e.target里面有name属性    动态绑定
        })
    }
}
