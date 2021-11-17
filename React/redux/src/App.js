import React, { PureComponent } from 'react'
import About from './pages/about2'
import Home from './pages/home2'
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <About/>
        <Home/>
      </div>
    )
  }
}
