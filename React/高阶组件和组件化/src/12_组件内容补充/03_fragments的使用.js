import React, { PureComponent,Fragment } from "react";

export default class App extends PureComponent {
  state = { counter: 0 ,
friends:[
    {name:'ls',age:20},
    {name:'zs',age:25},
    {name:'kobe',age:26}
]
};
  render() {
    return <>
        {/* 这个目的就是在DOM树里面 少了外层的div   */}
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={()=>{this.add()}}>+1</button>
        <div>
            {this.state.friends.map((item,index)=>{
                return (
                    <Fragment key={item.name}>
                        <div>{item.name}</div>
                        <p>{item.age}</p>
                    </Fragment>
                )
            })}
        </div>
    </>;
    // Fragment短语法  就是不写任何标签  直接就是<></>
  }
  add(){
      this.setState({
          counter:this.state.counter+1
      })
  }
}
