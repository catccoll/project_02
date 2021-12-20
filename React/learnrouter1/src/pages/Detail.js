import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
    render() {
        console.log(this.props.match); //  /detail/:id  这里和vue一样  需要使用占位符  但是获取的方法不同  这里是  this.props.match.params.id
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
