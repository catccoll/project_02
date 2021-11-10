import React, { PureComponent } from "react";
import classNames from "classnames";
export default class App extends PureComponent {
  state = {
    isActive: true,
    isShow: true,
    IsActive:true
  };
  render() {
    // 这里一定要洗个括号包裹一下，否则不会有两个类
    const {IsActive}=this.state
    const errClass='error'
    const n1=null
    return (
      <div className={"bbb" + (this.state.IsActive ? " aaa" : "")}>
        <h2 className={["title", this.state.isShow ? " aaa" : ""].join("")}>
          11
        </h2>
        {/* classnames库添加class */}
        <h3 className={classNames('foo','bar','active')}>我是标题1</h3>
        <h3 className='aaa  bbb   cccc'>我是标题2</h3>
        <h3 className={classNames({'active':IsActive},'bar')}>我是标题3</h3>
        <h3 className={classNames('foo',errClass,n1)}>我是标题4</h3>
        <h3 className={['foo','bbb']}>我是标题5</h3>
      </div>
    );
  }
}
