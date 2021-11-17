import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
    render() {
        console.log(this.props.match);
        // 这里面有路由所携带的简单参数在里面
        return (
            <div>
                <h2>{this.props.match.params.id}</h2>
            </div>
        )
    }
    // 动态路由传递参数
    componentDidMount(){
        console.log(this.props.match.params.id);
    }
}
