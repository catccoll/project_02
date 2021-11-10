import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    state={
        username:''
    }
    render() {
        return (
            <div>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    {/* 这就是受控组件 */}
                    <label htmlFor="userName">用户：<input value={this.state.username} onChange={(e)=>{this.changeInput(e)}} type="text"  id='userName'/ ></label>
                    <input type="submit"  value='提交'/>
                </form>
            </div>
        )
    }
    handleSubmit(e){
        e.preventDefault()
        console.log(this.state.username);
    }
    changeInput(e){
        this.setState({
            username:e.target.value
        })
    }
}
