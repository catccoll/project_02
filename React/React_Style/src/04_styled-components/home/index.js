import React, { PureComponent } from "react";
import {TitleWrapper,HomeWrapper} from './style'
export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper >
        <TitleWrapper>我是Home标题</TitleWrapper>
        <div className='banner'>
          <span>轮播图</span>
          <span className='active'>轮播图</span>
          <span>轮播图</span>
          <span>轮播图</span>
        </div>
      </HomeWrapper>
    );
  }
}

