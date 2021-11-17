import React, { PureComponent } from 'react'
import { Redirect } from 'react-router'

export default class User extends PureComponent {
    state={
        isLogin:true
    }
    render() {
        return this.state.isLogin?(
            <div>
                <h2>user</h2>
            </div>
        ):<Redirect to='/login'/>
        // 执行到这里会自动跳转到相应的组件里面
    }
}
