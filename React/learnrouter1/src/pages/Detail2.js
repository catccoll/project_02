import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
    render() {
        console.log(this.props.location.search.slice(1));
        // 这可以获取到拼接在链接上的参数
        return (
            <div>
                <h2>Detail2</h2>
                <h2>{this.props.location.search.slice(1)}</h2>
            </div>
        )
    }
}
