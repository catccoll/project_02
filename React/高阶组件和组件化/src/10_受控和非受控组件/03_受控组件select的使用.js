import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    state={
        fruits:'orange'
    }
    render() {
        return (
            <div>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    {/* 这就是受控组件 */}
            <select value={this.state.fruits} name="fruits" onChange={(e)=>{this.changeInput(e)}}>
                <option value="apple">苹果</option>
                <option value="banana">香蕉</option>
                <option value="orange">橘子</option>
            </select>
                    <input type="submit"  value='提交'/>
                </form>
            </div>
        )
    }
    handleSubmit(e){
        e.preventDefault()
        console.log(this.state.fruits);
    }
    changeInput(e){
        console.log(e);
        this.setState({
            fruits:e.target.value
        })
    }
}
