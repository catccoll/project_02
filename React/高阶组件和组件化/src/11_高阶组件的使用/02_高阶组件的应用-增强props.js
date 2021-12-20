import React, { memo, PureComponent } from "react";
// 定义一个高阶组件

// class App extends PureComponent {
//     render() {
//         return (
//             <div>
//                 App
//                 <EnhanceHome nickName='saigao' level="99"    />
//                 <About nickName='kobe' level="100"/>
//             </div>
//         )
//     }
// }

// class Home extends PureComponent{
//     render(){
//         return(
//             <h2>home:{`昵称:${this.props.nickName } 等级：${this.props.level} 区域:${this.props.region}`}</h2>
//         )
//     }
// }

// class About extends PureComponent{
//     render(){
//         return(
//             <h2>about:{`昵称:${this.props.nickName } 等级：${this.props.level}`}</h2>
//         )
//     }
// }
// const EnhanceHome= enhancePropsArea(Home)
// function enhancePropsArea(WrappedComponent){
//     return props=>{
//         console.log(props);
//         return <WrappedComponent {...props} region='中国'/>
//     }
//  }
// export default  App

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <NewComponent sex="男" age="18" />
      </div>
    );
  }
}
function enhanceComponent(WrapperComponent) {
  return (props) => {
    return (
      <div>
        <WrapperComponent {...props} name="sai" />
      </div>
    );
  };
}
class childCpn extends PureComponent {
  render() {
      const {name,age,sex}=this.props
    return (
      <div>
        <h1>哈哈</h1>
        <h1>{name}</h1>
        <h1>{sex}</h1>
        <h1>{age}</h1>
      </div>
    );
  }
}
const NewComponent = enhanceComponent(childCpn);
export default App
