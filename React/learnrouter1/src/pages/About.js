import React, { PureComponent } from "react";
import { matchRoutes, renderRoutes } from "react-router-config";
import { NavLink, Switch, Route } from "react-router-dom";
import routes from "../router";
export function Culture() {
  return <h2>企业历史文化</h2>;
}
export function Content() {
  return <h2>发展共赢</h2>;
}
export function History() {
  return <h2>联系我们</h2>;
}
export function Join() {
  return <h2>投递简历把 老baby</h2>;
}
export default class About extends PureComponent {
  render() {
    console.log(routes);
    console.log(this.props.route);
    // const branch = matchRoutes(this.props.route.routes, "/about");
    // console.log(branch);
    return (
      // 路由嵌套
      <div>
        <NavLink exact to="/about" activeClassName="about-active">
          企业历史
        </NavLink>
        <NavLink to="/about/culture" activeClassName="about-active">
          企业文化
        </NavLink>
        <NavLink to="/about/content" activeClassName="about-active">
          联系我们
        </NavLink>
        <button onClick={(e) => this.join()}>加入我们</button>
        {/* <Switch>
                   <Route exact path='/about' component={Culture}></Route>
                   <Route path='/about/culture' component={Content}></Route>
                   <Route  path='/about/content' component={History}></Route>
                   <Route path='/about/join' component={Join}></Route>
               </Switch> */}
        {/* 只有写了这个函数  才有this.props.routes  用了switch就没有这个this.props.routes */}
        {renderRoutes(this.props.route.routes)}
        {/* renderRoutes(routes[1].routes) */}
      </div>
    );
  }
  join() {
    console.log(this.props);
    //  动态路由跳转
    this.props.history.push("/about/join");
    //  console.log(this.props.location);
    //  console.log(this.props.match);
  }
}
