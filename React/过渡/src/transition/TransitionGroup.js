import React, { PureComponent } from "react";
import { CSSTransition,TransitionGroup } from "react-transition-group";

import "./TransitionGroup.css";
export default class TransitionGroupDemo extends PureComponent {
  state = {
    name: ["why", "saigao", "小里"],
  };
  render() {
    return (
        // n 当我们有一组动画时，需要将这些CSSTransition放入到一个TransitionGroup中来完成动画：且每个li标签都必须被cssTransition来进行包裹
      <TransitionGroup>
        {this.state.name.map((item, index) => {
          return (
            <CSSTransition key={item} timeout={500} classNames="item">
              <li>{item}
              <button onClick={e=>this.remove(index)} >--</button>
              </li>
            </CSSTransition>
          );
        })}
        <button onClick={e=> this.addName()}>+name</button>
      </TransitionGroup>
    );
  }
  addName() {
    this.setState({
      name: [...this.state.name, "yan"],
    });
  }
  remove(index){
      this.setState({
        //   这样很便捷的删除数组当中的某个数
          name:this.state.name.filter((item,indey)=>{
              return  index!==indey
          })
      })
  }
}
