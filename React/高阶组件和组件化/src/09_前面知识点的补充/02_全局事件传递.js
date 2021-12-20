import React, { PureComponent } from "react";
// import { EventEmitter } from "events";
// const eventBus = new EventEmitter();
// // 事件总线：event bus
// export default class App extends PureComponent {
//   render() {
//     return (
//       <div>
//         <Home />
//         <Profile />
//       </div>
//     );
//   }
// }

// class Home extends PureComponent {
//   render() {
//     return <div>Home</div>;
//   }
//   componentDidMount() {
//     // 在这里事件监听
//     eventBus.addListener("sayHello", this.handleSayHello);
//   }
//   componentWillUnmount() {
//     // 取消事件监听
//     eventBus.removeListener("sayHello", this.handleSayHello);
//   }
//   handleSayHello(num, message) {
//     console.log(num, message);
//   }
// }

// class Profile extends PureComponent {
//   render() {
//     return (
//       <div>
//         <h2>Profile</h2>
//         <button
//           onClick={() => {
//             this.emitEvent();
//           }}
//         >
//           点击了PROFILE按钮
//         </button>
//       </div>
//     );
//   }
//   emitEvent() {
//     eventBus.emit("sayHello", 123, "我很好");
//   }
// }
import {EventEmitter } from 'events'
const eventBus=new EventEmitter()
 export default  class App extends PureComponent{
    render() {
      return (
        <div>
            <h1>你好呀</h1>
            <ChildApp/>
        </div>
      )
    }
    componentDidMount(){
      eventBus.addListener('click',this.click)
    }
    click(name,age){
  console.log(name,age);
    }
}
 class ChildApp extends  PureComponent{
   render() {
     return (
       <div>
         <button onClick={()=>{this.emit()}}>发送事件</button>
       </div>
     )
   }
   emit(){
      eventBus.emit('click','sai',18)
   }
 }
   
