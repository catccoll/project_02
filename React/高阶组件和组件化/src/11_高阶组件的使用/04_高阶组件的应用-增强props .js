import React, { PureComponent, memo } from "react";
// 定义一个高阶组件
// function withUser(WrappedComponent){
//     return props=>{
//         return (
//             <UserContext.Consumer>
//             {(user) => {
//               return (
//             <WrappedComponent  {...props} {...user}/>
//               );
//             }}
//           </UserContext.Consumer>
//         )
//     }
// }
// // 1.创建context
// const UserContext = React.createContext({
//   nickName: "小高",
//   level: 99,
// });

// class App extends PureComponent {
//   render() {
//     return (
//       <div>
//         App
//         {/* 这里要用两个花括号 如果是一个对象的话，且里面没有变量 */}
//         <UserContext.Provider value={{ nickName: "gg", level: 20 ,region:'中国' }}>
//           <UserHome />
//           <UserAbout />
//         </UserContext.Provider>
//       </div>
//     );
//   }
// }

// class Home extends PureComponent {
//   render() {
//     return (
//       <h2>home:{`昵称:${this.props.nickName} 等级：${this.props.level}`}</h2>
//     );
//   }
// }
// const UserHome=withUser(Home)

// class About extends PureComponent {
//   render() {
//     return (
//       <h2>about:{`昵称:${this.props.nickName} 等级：${this.props.level}`}</h2>
//     );
//   }
// }
// const UserAbout=withUser(About)
// export default App;
const UserContextType = React.createContext({
  name: "sai",
  age: 18,
});

export default class App extends PureComponent {
  state = {
    sex: "男",
    height: 1.78,
  };
  render() {
    return (
      <div>
        <UserContextType.Provider value={this.state}>
        <NewComponent></NewComponent>
        </UserContextType.Provider>
      </div>
    );
  }
}

function enhanceComponent(WrapperComponent) {
  return (props) => {
    return (
      <UserContextType.Consumer>
        {(value) => {
          return <WrapperComponent {...value} {...props} />;
        }}
      </UserContextType.Consumer>
    );
  };
}

function App2(props) {
  return (
    <div>
      <h1>你好呀</h1>
      <h1>{props.sex}</h1>
      <h1>{props.name}</h1>
    </div>
  );
}
const NewComponent =enhanceComponent(App2)
