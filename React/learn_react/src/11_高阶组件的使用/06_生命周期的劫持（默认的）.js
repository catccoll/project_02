import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
                <About/>
            </div>
        )
    }
}
class Home extends PureComponent {
  
    componentWillMount(){
        this.beginTime=Date.now()//这样是吧beginTime添加到实例对象里面，像是添加属性那样
    }
    componentDidMount(){
        this.endTime=Date.now()
        const interval=this.endTime-this.beginTime
        console.log(interval);
        
    }
    render() {
      return (
        <h2>home</h2>
      );
    }

  }
  class About extends PureComponent {
    render() {
      return (
        <h2>about</h2>
      );
    }
  }
  // 每一个组里面都有都有name属性  且 类的name属性值是类组件名字
    //  class p {} p.name =p
  