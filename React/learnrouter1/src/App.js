import React, { PureComponent } from "react";
import "./css/App.css";
import { renderRoutes } from "react-router-config";
import routes from "./router/index";
import {
  // HashRouter,哈希模式
  // BrowserRouter, //history模式
  // Link,
  NavLink,
  // Route,
  // Switch,
  withRouter,
} from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import User from "./pages/User";
// import NoMatch from "./pages/noMatch";
// import Login from "./pages/Login";
// import Products from "./pages/Products";
// import Detail from "./pages/Detail";
// import Detail2 from "./pages/Detail2";
// import Detail3 from "./pages/Detail3";
class App extends PureComponent {
  state = {
    links: [
      { to: "/", title: "首页" },
      { to: "/about", title: "关于" },
      { to: "/profile", title: "我的" },
    ],
    currentIndex: 0,
  };
  render() {
    console.log(this.props.history);
    return (
      <div>
        {/* link都会在在页面上显示 ,路经与route里面的路经相同时，对应的组件才会显示出来，其他的不会显示，router对应组件的显示位置取决你自己放在哪里 */}
        {/* {
              this.state.links.map((item,index)=>{
                return (
                  <div key={item.title} >
                    <Link className={this.state.currentIndex===index?'color':''} onClick={e=>this.changeCurrentIndex(index)} to={item.to}>{item.title}</Link>
                  </div>
                )
              })
            } */}
        {/* <Link exact to='/'>首页</Link>
            <Link to='/about'>关于</Link>
            <Link to='/profile'>我的</Link> */}
        {/* 当匹配《/》时，也要精准匹配 这里是指匹配活跃的组件 */}
        {/* <NavLink exact to='/' activeStyle={{color:'red'}}>首页</NavLink>
           <NavLink to='/about'  activeStyle={{color:'red'}}>关于</NavLink>
           <NavLink to='/profile'  activeStyle={{color:'red'}}>我的</NavLink> */}
           {/* 凡是碰到'/'开头，都需要exact 精准匹配*/}
        <NavLink exact to="/" activeClassName="link-active">
          首页
        </NavLink>
        <NavLink to="/about" activeClassName="link-active">
          关于
        </NavLink>
        <NavLink to="/profile" activeClassName="link-active">
          我的
        </NavLink>
        <NavLink to="/user" activeClassName="link-active">
          用户
        </NavLink>
        <NavLink to="/detail/abc" activeClassName="link-active">
          详情1
        </NavLink>
        <NavLink to={"/detail2?age=18&name=why"} activeClassName="link-active">
          详情2
        </NavLink>
        {/* 想要传递的信息复杂的话，需要用对象格式，且复杂的东西放在state里面 */}
        <NavLink
          to={{
            pathname: "/detail3",
            search: "name=abc",
            state: this.state.links,
          }}
          activeClassName="link-active"
        >
          详情3
        </NavLink>
        <button onClick={(e) => this.jump()}>商品</button>
        {/* 这个在当活跃的时候，系统会自动帮我们添加一个active类 也可以修改系统的自带的"active"类*  使用activeClassName进行修改  /}
    

        {/* 当匹配“/”时  要添加exact 这样才能精准匹配路经*/}
        {/* Switch的作用 就是 匹配到了第一个就不会继续匹配了*/}
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} /> */}
        {/* <Route path='/:id' component={User}></Route> */}
        {/* <Route path="/user" component={User}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/detail2" component={Detail2}></Route>
          <Route path="/detail3" component={Detail3}></Route>
          <Route component={NoMatch}></Route> */}
        {/* 这个是要写到最后 别乱了顺序 如果什么都匹配不到  就匹配到这个组件*/}
        {/* </Switch> */}
        {renderRoutes(routes)}
      </div>
    );
  }
  // changeCurrentIndex(index){
  //        this.setState({
  //           currentIndex:index
  //        })
  // }
  // 动态路由跳转
  jump() {
    this.props.history.push("/products");
  }
}
// 如果不是通过路由跳转调到对应的组件的话，就不能在组件里面使用this.props.history，要通过一个高阶组件函数 ，包裹你要操作DOM的组件，这个组件在其他地方用的时候 要再次用BrowserRouter包裹一下子 然后就会获得和跳转那样得到很多方法
export default withRouter(App);
