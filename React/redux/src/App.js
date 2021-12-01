import React, { PureComponent } from 'react'
import About from './pages/about2'
import Home from './pages/home2'
import About2 from './pages/about3'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <About/>
        <Home/>
        <About2/>
      </div>
    )
  }
}
