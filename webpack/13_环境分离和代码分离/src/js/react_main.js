import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,  Route,Link ,} from "react-router-dom";
import About from "../../pages/about.jsx";
import Home from "../../pages/home";
import Son from './son'
class App extends Component {
  state = {
    message: "阿萨德阿萨德",
  };
  render() {
    return (
      <div>
      <BrowserRouter>
      <Link to='/home'>首页</Link>
      <Link to='/about'>关于</Link>
    
      <Route path='/home' component={Home}></Route>
      <Route path='/about' component={About}></Route>
  
 
      <Son></Son>
      </BrowserRouter>
       
      </div>
    );
  }
}
ReactDOM.render(<App></App>, document.getElementById("root"));
