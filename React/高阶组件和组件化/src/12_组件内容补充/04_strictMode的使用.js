import React, { PureComponent, StrictMode } from "react";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Profile />
        <StrictMode>
          <Home />
        </StrictMode>
      </div>
    );
  }
}

class Home extends PureComponent {
  constructor(props) {
    super(props);
    console.log("Home");
  }
  render() {
    //    ref="title"
    return <div>Home</div>;
  }
  //   UNSAFE_componentWillMount(){
  //       console.log('Home');
  //   }
}
class Profile extends PureComponent {
  constructor(props) {
    super(props);
    console.log("profile");
  }
  render() {
    return <div>Profile</div>;
  }
  //   UNSAFE_componentWillMount() {
  //     console.log("Profile");
  //   }
}
/*
但是检测，到底检测什么呢?
1.识别不安全的生命周期︰
⒉.使用过时的ref API
3.检查意外的副作用
这个组件的constructor会被调用两次;
这是严格模式下故意进行的操作，让你来查看在这里写的一些逻辑代码被调用多次时，是否会产生一些副作用;在生产环境中，是不会被调用两次的;
4.使用废弃的findDOMNode方法
在之前的React API中，可以通过findDOMNode来获取DOM，不过已经不推荐使用了，可以自行学习演练一下
5.检测过时的context API
早期的Context是通过static属性声明Context对象属性，通过getChildContext返回Context对象等方式来使用Context的;目前这种方式已经不推荐使用，大家可以自行学习了解一下它的用法;

*/
