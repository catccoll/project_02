import React, { PureComponent } from 'react'
// 定义一个高阶组件

class App extends PureComponent {
    render() {
        return (
            <div>
                App
                <EnhanceHome nickName='saigao' level="99"    />
                <About nickName='kobe' level="100"/>
            </div>
        )
    }
}

class Home extends PureComponent{
    render(){
        return(
            <h2>home:{`昵称:${this.props.nickName } 等级：${this.props.level} 区域:${this.props.region}`}</h2>
        )
    }
}

class About extends PureComponent{
    render(){
        return(
            <h2>about:{`昵称:${this.props.nickName } 等级：${this.props.level}`}</h2>
        )
    }
}
const EnhanceHome= enhancePropsArea(Home)
function enhancePropsArea(WrappedComponent){
    return props=>{
        console.log(props);
        return <WrappedComponent {...props} region='中国'/>
    }
 }
export default  App