import React, { PureComponent } from 'react'
//  定义高阶组件
function withRenderTime(WrappedComponent){
  return class extends PureComponent{
    componentWillMount(){
      this.beginTime=Date.now()//这样是吧beginTime添加到实例对象里面，像是添加属性那样
  }
  componentDidMount(){
      this.endTime=Date.now()
      const interval=this.endTime-this.beginTime
      console.log(interval);
      
  }
  // 这样的做法相当于把两个生命周期函数 附加在传进来的类组件当中
  render (){
    return <WrappedComponent  {...this.props}/>
  }
  }
}
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
                <RenderAbout/>
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
  const RenderAbout=withRenderTime(About)
  