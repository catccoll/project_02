import React, { PureComponent } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './SwitchTransition.css'
export default class SwitchTransitionDemo extends PureComponent {
  state = {
    isOn: true,
  };
  render() {
    const { isOn } = this.state;
    return (
      <div>
        <SwitchTransition mode='out-in'>
            {/* 这个key和下面的按钮的改变值一样 */}
          <CSSTransition key={isOn?'on':'off'} classNames='btn' timeout={500}>
            <button onClick={() => this.setState({ isOn: !isOn })}>
              {isOn ? "on" : "of"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
// 这个组件主要是按钮的切换  
