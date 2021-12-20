import React, { PureComponent } from "react";

// class App extends PureComponent {
//     render() {
//         return (
//             <div>
//                 1
//             </div>
//         )
//     }
// }
// // enhance 增强  定义一个增强函数，作用 在某些事情之前劫持组件
// // 高阶组件就是创建一个函数  ，函数形参是组件 ，返回值也是组件
// function enhanceComponent (WrappedComponent){
// return class NewComponent extends PureComponent{
//     render(){
//         return <WrappedComponent/>
//     }
// }
// }
// // 可以自定义class组件名字,仅仅就是改变插件里面组件的名字显示
// App.displayName='xiaoGao'
// const EnhanceComponent=enhanceComponent(App)
// export default  EnhanceComponent

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>我是将要加强的组件</h1>
      </div>
    );
  }
}

function enhanceComponent(WrapperComponent) {
  return class newComponent extends PureComponent {
    render() {
      return (
        <div>
          <WrapperComponent />
        </div>
      );
    }
  };
}
const newComponent= enhanceComponent(App) 
newComponent.displayName='小高'
     export default newComponent
