import React, { PureComponent } from 'react'
import CSSTransition from './transition/CSSTransition'
import SwitchTransitionDemo from './transition/SwitchTransition'
 import TransitionGroupDemo from './transition/TransitionGroup'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <CSSTransition></CSSTransition>
        <SwitchTransitionDemo></SwitchTransitionDemo>
        <TransitionGroupDemo></TransitionGroupDemo>
      </div>
    )
  }
}
